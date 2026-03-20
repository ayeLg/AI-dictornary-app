import { useState, useEffect, useRef } from 'react';
import { KEYS, lsGet, lsSet } from './lib/storage';
import {
  fbAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,
  cloudLoad, cloudSave,
} from './lib/firebase';
import OfflineBanner from './components/OfflineBanner';
import ApiKeyModal from './components/ApiKeyModal';
import DictionaryTab from './components/DictionaryTab';
import QuizTab from './components/QuizTab';
import DailyTab from './components/DailyTab';
import ProfileTab from './components/ProfileTab';
import LearnTab, { getLearnDueCount } from './components/LearnTab';
import PracticeTab from './components/PracticeTab';

const TODAY = () => new Date().toISOString().slice(0, 10);

export default function App() {
  const [activeTab, setActiveTab]           = useState('dictionary');
  const [apiKey, setApiKey]                 = useState(() => lsGet(KEYS.API, ''));
  const [showKeyModal, setShowKeyModal]     = useState(false);
  const [saved, setSaved]                   = useState(() => lsGet(KEYS.SAVED, []));
  const [srsData, setSrsData]               = useState(() => lsGet(KEYS.SRS, {}));
  const [streak, setStreak]                 = useState(() => lsGet(KEYS.STREAK, { lastDate: '', count: 0 }));
  const [user, setUser]                     = useState(null);
  const [syncing, setSyncing]               = useState(false);
  const [authReady, setAuthReady]           = useState(false);
  const [pendingSearch, setPendingSearch]   = useState(null);
  const syncTimerRef                        = useRef(null);

  const updateStreak = () => {
    const today = TODAY();
    setStreak(prev => {
      if (prev.lastDate === today) return prev;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().slice(0, 10);
      const next = prev.lastDate === yStr
        ? { lastDate: today, count: prev.count + 1 }
        : { lastDate: today, count: 1 };
      lsSet(KEYS.STREAK, next);
      return next;
    });
  };

  // Update streak on mount
  useEffect(() => { updateStreak(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auth state listener — loads saved words + apiKey + srsData from cloud
  useEffect(() => {
    return onAuthStateChanged(fbAuth, async (u) => {
      setUser(u);
      setAuthReady(true);
      if (u) {
        setSyncing(true);
        try {
          const { saved: cloudWords, apiKey: cloudKey, srsData: cloudSrs } = await cloudLoad(u.uid);
          if (cloudWords.length > 0) {
            setSaved(cloudWords);
            lsSet(KEYS.SAVED, cloudWords);
          } else {
            const local = lsGet(KEYS.SAVED, []);
            if (local.length > 0) await cloudSave(u.uid, local, lsGet(KEYS.API, ''));
          }
          if (cloudKey) {
            setApiKey(cloudKey);
            lsSet(KEYS.API, cloudKey);
          } else {
            const localKey = lsGet(KEYS.API, '');
            if (localKey) await cloudSave(u.uid, cloudWords, localKey);
          }
          if (cloudSrs && Object.keys(cloudSrs).length > 0) {
            setSrsData(cloudSrs);
            lsSet(KEYS.SRS, cloudSrs);
          }
        } catch (e) { console.warn('Cloud load failed', e); }
        finally { setSyncing(false); }
      }
    });
  }, []);

  const needsKey = authReady && !user && !apiKey && activeTab === 'dictionary';

  const handleSaveKey = (key) => {
    lsSet(KEYS.API, key);
    setApiKey(key);
    setShowKeyModal(false);
    if (user) cloudSave(user.uid, lsGet(KEYS.SAVED, []), key).catch(() => {});
  };

  const handleSaveToggle = (result) => {
    setSaved(prev => {
      const exists = prev.some(s => s.word?.toLowerCase() === result.word?.toLowerCase());
      const next   = exists
        ? prev.filter(s => s.word?.toLowerCase() !== result.word?.toLowerCase())
        : [result, ...prev];
      lsSet(KEYS.SAVED, next);
      if (user) cloudSave(user.uid, next).catch(() => {});
      return next;
    });
  };

  const handleRemoveWord = (word) => {
    setSaved(prev => {
      const next = prev.filter(s => s.word?.toLowerCase() !== word.toLowerCase());
      lsSet(KEYS.SAVED, next);
      if (user) cloudSave(user.uid, next).catch(() => {});
      return next;
    });
  };

  const handleSrsUpdate = (newSrs) => {
    setSrsData(newSrs);
    lsSet(KEYS.SRS, newSrs);
    if (user) {
      clearTimeout(syncTimerRef.current);
      syncTimerRef.current = setTimeout(() => {
        cloudSave(user.uid, lsGet(KEYS.SAVED, []), undefined, newSrs).catch(() => {});
      }, 2000);
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(fbAuth, provider).catch(e => alert('Login failed: ' + e.message));
  };
  const handleLogout = () => signOut(fbAuth);

  const learnDue = getLearnDueCount(saved, srsData);

  const tabs = [
    { id: 'dictionary', icon: '📚', label: 'Dict' },
    { id: 'learn',      icon: '🎴', label: 'Learn',    badge: learnDue },
    { id: 'quiz',       icon: '🧠', label: 'Quiz' },
    { id: 'practice',   icon: '✏️',  label: 'Practice' },
    { id: 'daily',      icon: '📖', label: 'Daily' },
    { id: 'profile',    icon: '👤', label: 'Profile' },
  ];

  return (
    <>
      {(needsKey || showKeyModal) && <ApiKeyModal onSave={handleSaveKey} onGoogleLogin={handleGoogleLogin} />}

      <div className="app-header">
        <div className="app-brand">
          <span className="app-title">Mingalar</span>
          <span className="app-subtitle">EN · MY Dictionary</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {syncing && <span style={{ fontSize: 11, color: 'var(--text3)' }}>⟳ syncing…</span>}
          {user && (
            <img src={user.photoURL} alt="" style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid var(--accent)' }} />
          )}
        </div>
      </div>

      <OfflineBanner />

      <div className="content-area">
        {activeTab === 'dictionary' && apiKey && (
          <DictionaryTab apiKey={apiKey} saved={saved} onSaveToggle={handleSaveToggle} pendingSearch={pendingSearch} onPendingClear={() => setPendingSearch(null)} />
        )}
        {activeTab === 'learn' && (
          <LearnTab saved={saved} srsData={srsData} onSrsUpdate={handleSrsUpdate} />
        )}
        {activeTab === 'quiz' && (
          <QuizTab apiKey={apiKey} saved={saved} />
        )}
        {activeTab === 'practice' && (
          <PracticeTab apiKey={apiKey} />
        )}
        {activeTab === 'daily' && (
          <DailyTab apiKey={apiKey} saved={saved} />
        )}
        {activeTab === 'profile' && (
          <ProfileTab
            apiKey={apiKey} saved={saved}
            onEditKey={() => setShowKeyModal(true)}
            onRemoveWord={handleRemoveWord}
            onSwitchTab={(word) => { setPendingSearch(word); setActiveTab('dictionary'); }}
            user={user} syncing={syncing}
            onLogin={handleGoogleLogin} onLogout={handleLogout}
            srsData={srsData} streak={streak}
          />
        )}
      </div>

      <nav className="bottom-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-item${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon-wrap">
              <span className="nav-icon">{tab.icon}</span>
              {tab.badge > 0 && <span className="nav-badge">{tab.badge > 99 ? '99+' : tab.badge}</span>}
            </span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
