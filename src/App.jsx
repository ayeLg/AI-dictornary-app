import { useState, useEffect } from 'react';
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

export default function App() {
  const [activeTab, setActiveTab]       = useState('dictionary');
  const [apiKey, setApiKey]             = useState(() => lsGet(KEYS.API, ''));
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [saved, setSaved]               = useState(() => lsGet(KEYS.SAVED, []));
  const [user, setUser]                 = useState(null);
  const [syncing, setSyncing]           = useState(false);
  const [authReady, setAuthReady]       = useState(false);
  const [pendingSearch, setPendingSearch] = useState(null);

  // Auth state listener — loads saved words + apiKey from cloud
  useEffect(() => {
    return onAuthStateChanged(fbAuth, async (u) => {
      setUser(u);
      setAuthReady(true);
      if (u) {
        setSyncing(true);
        try {
          const { saved: cloudWords, apiKey: cloudKey } = await cloudLoad(u.uid);
          // Load saved words from cloud
          if (cloudWords.length > 0) {
            setSaved(cloudWords);
            lsSet(KEYS.SAVED, cloudWords);
          } else {
            const local = lsGet(KEYS.SAVED, []);
            if (local.length > 0) await cloudSave(u.uid, local, lsGet(KEYS.API, ''));
          }
          // Load API key from cloud (syncs across devices!)
          if (cloudKey) {
            setApiKey(cloudKey);
            lsSet(KEYS.API, cloudKey);
          } else {
            // First login — upload local key to cloud
            const localKey = lsGet(KEYS.API, '');
            if (localKey) await cloudSave(u.uid, cloudWords, localKey);
          }
        } catch(e) { console.warn('Cloud load failed', e); }
        finally { setSyncing(false); }
      }
    });
  }, []);

  // Wait for auth to load before showing modal — prevents flashing on new device
  const needsKey = authReady && !user && !apiKey && activeTab === 'dictionary';

  // Save key to both localStorage and cloud
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

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(fbAuth, provider).catch(e => alert('Login failed: ' + e.message));
  };
  const handleLogout = () => signOut(fbAuth);

  const tabs = [
    { id: 'dictionary', icon: '📚', label: 'Dictionary' },
    { id: 'quiz',       icon: '🧠', label: 'Quiz' },
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
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          {syncing && <span style={{fontSize:11,color:'var(--text3)'}}>⟳ syncing…</span>}
          {user && (
            <img src={user.photoURL} alt="" style={{width:28,height:28,borderRadius:'50%',border:'2px solid var(--indigo)'}} />
          )}
        </div>
      </div>

      {/* Phase 3: Offline banner (shows automatically when offline) */}
      <OfflineBanner />

      <div className="content-area">
        {activeTab === 'dictionary' && apiKey && (
          <DictionaryTab apiKey={apiKey} saved={saved} onSaveToggle={handleSaveToggle} pendingSearch={pendingSearch} onPendingClear={() => setPendingSearch(null)} />
        )}
        {activeTab === 'quiz' && (
          <QuizTab apiKey={apiKey} saved={saved} />
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
            user={user}
            syncing={syncing}
            onLogin={handleGoogleLogin}
            onLogout={handleLogout}
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
            <span className="nav-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
