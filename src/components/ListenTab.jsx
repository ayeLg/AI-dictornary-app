import { useState, useRef, useEffect, useCallback } from 'react';
import { buildSpeechScript, synthesizeSpeech } from '../lib/geminiTts';
import { cloudSaveAudio, cloudLoadAudioWords, cloudLoadAudio } from '../lib/supabase';
import { getAllAudioWords, getAudio, deleteAudio } from '../lib/audioStore';

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const activeStyle = { background: 'var(--accent-bg)', borderColor: 'var(--accent)', color: 'var(--accent2)' };
const wordKey = (w) => w.toLowerCase();

export default function ListenTab({ saved, onSaveToggle, orKey, user, onLogin }) {
  const [busyWord, setBusyWord] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState(new Set());
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [bulkProgress, setBulkProgress] = useState(null);
  const [audioWords, setAudioWords] = useState(new Set());
  const audioRef = useRef(null);
  const migratingRef = useRef(new Set());

  const hasKey = !!orKey;
  const generatedWords = saved.filter(w => audioWords.has(wordKey(w.word)));
  const pendingWords = saved.filter(w => !audioWords.has(wordKey(w.word)));

  // Load which words already have audio saved in the cloud.
  useEffect(() => {
    if (!user) return;
    cloudLoadAudioWords(user.id).then(words => setAudioWords(new Set(words))).catch(() => {});
  }, [user]);

  // One-time migration from older storage: audio_my embedded directly on the word
  // (pre-IndexedDB), and audio previously cached in this browser's IndexedDB
  // (pre-cloud) — both move into the audio_clips table so it follows the account.
  useEffect(() => {
    if (!user) return;

    const legacyInline = saved.filter(w => w.audio_my && !migratingRef.current.has(wordKey(w.word)));
    legacyInline.forEach(w => {
      migratingRef.current.add(wordKey(w.word));
      cloudSaveAudio(user.id, w.word, w.audio_my)
        .then(() => {
          setAudioWords(prev => new Set(prev).add(wordKey(w.word)));
          // eslint-disable-next-line no-unused-vars
          const { audio_my, audio_my_at, ...stripped } = w;
          onSaveToggle(stripped, true);
        })
        .catch(() => { migratingRef.current.delete(wordKey(w.word)); });
    });

    getAllAudioWords().then(localWords => {
      localWords.forEach(word => {
        if (migratingRef.current.has(wordKey(word))) return;
        migratingRef.current.add(wordKey(word));
        getAudio(word)
          .then(base64 => base64 && cloudSaveAudio(user.id, word, base64))
          .then(() => {
            setAudioWords(prev => new Set(prev).add(wordKey(word)));
            deleteAudio(word).catch(() => {});
          })
          .catch(() => { migratingRef.current.delete(wordKey(word)); });
      });
    }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, saved]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || queue.length === 0 || !user) return;
    let cancelled = false;
    const word = queue[queueIndex].word;
    cloudLoadAudio(user.id, word).then(base64 => {
      if (cancelled || !base64) return;
      el.src = `data:audio/wav;base64,${base64}`;
      el.play().catch(() => {});
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({ title: word, artist: 'Mingalar' });
      }
    });
    return () => { cancelled = true; };
  }, [queue, queueIndex, user]);

  const generate = async (word) => {
    if (!hasKey || !user) return;
    setBusyWord(word.word);
    setErrors(prev => ({ ...prev, [word.word]: null }));
    try {
      const text = buildSpeechScript(word);
      const audio_my = await synthesizeSpeech({ text, apiKey: orKey });
      await cloudSaveAudio(user.id, word.word, audio_my);
      setAudioWords(prev => new Set(prev).add(wordKey(word.word)));
    } catch (e) {
      setErrors(prev => ({ ...prev, [word.word]: e.message || 'Generate မအောင်မြင်ပါ' }));
    } finally {
      setBusyWord(null);
    }
  };

  const generateAll = async () => {
    if (!hasKey || !user || pendingWords.length === 0) return;
    setBulkProgress({ done: 0, total: pendingWords.length });
    for (let i = 0; i < pendingWords.length; i++) {
      await generate(pendingWords[i]);
      setBulkProgress({ done: i + 1, total: pendingWords.length });
    }
    setBulkProgress(null);
  };

  const buildQueue = (list, startIndex = 0) => {
    if (list.length === 0) return;
    setQueue(list);
    setQueueIndex(startIndex);
  };

  const withOrder = (list) => (shuffle ? shuffled(list) : list);

  const playAll = () => buildQueue(withOrder(generatedWords), 0);
  const playFrom = (word) => buildQueue(generatedWords, generatedWords.findIndex(w => w.word === word.word));
  const playCount = (n) => buildQueue(withOrder(generatedWords).slice(0, n), 0);
  const playSelected = () => buildQueue(withOrder(generatedWords.filter(w => selected.has(w.word))), 0);

  const toggleSelected = (word) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(word) ? next.delete(word) : next.add(word);
      return next;
    });
  };

  const next = useCallback(() => setQueueIndex(i => (i + 1 < queue.length ? i + 1 : (loop ? 0 : i))), [queue.length, loop]);
  const prev = useCallback(() => setQueueIndex(i => (i > 0 ? i - 1 : (loop ? queue.length - 1 : 0))), [queue.length, loop]);
  const handleEnded = () => setQueueIndex(i => (i + 1 < queue.length ? i + 1 : (loop ? 0 : i)));
  const closeQueue = () => {
    if (audioRef.current) audioRef.current.pause();
    setQueue([]);
    setQueueIndex(0);
  };

  // Registers this as a real OS-level media session — without it, mobile browsers treat the
  // page as inactive once the screen locks and suspend JS, so auto-advance never fires.
  useEffect(() => {
    if (!('mediaSession' in navigator) || queue.length === 0) return;
    navigator.mediaSession.setActionHandler('play', () => audioRef.current?.play());
    navigator.mediaSession.setActionHandler('pause', () => audioRef.current?.pause());
    navigator.mediaSession.setActionHandler('previoustrack', prev);
    navigator.mediaSession.setActionHandler('nexttrack', next);
    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  }, [queue.length, loop, next, prev]);

  if (!user) {
    return (
      <div className="section-wrap tab-fade">
        <div className="section-title">Listen</div>
        <div className="panel-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
          <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 12 }}>
            Listen tab က audio ကို account နဲ့တွဲပြီး cloud မှာ သိမ်းပါတယ်။<br />
            Google account နဲ့ login လုပ်ပါ။
          </div>
          <button
            onClick={onLogin}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#1a1a1a', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.43-8.83l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-wrap tab-fade">
      <div className="section-title">Listen</div>
      <div className="section-label" style={{ marginBottom: 9 }}>Saved Words ({saved.length})</div>

      {!hasKey && (
        <div className="panel-card" style={{ padding: '12px 14px', marginBottom: 14, fontSize: 13, color: 'var(--text2)' }}>
          OpenRouter API key ကို Profile → Settings မှာ ထည့်ပါ။
        </div>
      )}

      {hasKey && pendingWords.length > 0 && (
        <div className="panel-card" style={{ padding: '10px 14px', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="icon-btn" disabled={!!bulkProgress} onClick={generateAll}>
            {bulkProgress ? `Generating ${bulkProgress.done}/${bulkProgress.total}…` : `⚡ Generate All (${pendingWords.length})`}
          </button>
        </div>
      )}

      {generatedWords.length > 0 && (
        <div className="panel-card" style={{ padding: '10px 14px', marginBottom: 10, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <button className="icon-btn" onClick={playAll}>▶ Play All</button>
          {[10, 20].filter(n => n <= generatedWords.length).map(n => (
            <button key={n} className="icon-btn" onClick={() => playCount(n)}>{n}</button>
          ))}
          <button
            className="icon-btn"
            style={selectMode ? activeStyle : undefined}
            onClick={() => { setSelectMode(s => !s); setSelected(new Set()); }}
          >
            {selectMode ? 'Cancel' : 'Select'}
          </button>
          {selectMode && selected.size > 0 && (
            <button className="icon-btn" onClick={playSelected}>▶ Play Selected ({selected.size})</button>
          )}
          <button className="icon-btn" style={shuffle ? activeStyle : undefined} onClick={() => setShuffle(s => !s)}>
            🔀 Shuffle
          </button>
          <button className="icon-btn" style={loop ? activeStyle : undefined} onClick={() => setLoop(l => !l)}>
            🔁 Loop
          </button>
        </div>
      )}

      {queue.length > 0 && (
        <div className="panel-card" style={{ padding: '10px 14px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className="icon-btn" onClick={prev}>⏮</button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, color: 'var(--text3)' }}>{queueIndex + 1} / {queue.length}</div>
            <div className="saved-word-name" style={{ fontSize: 16 }}>{queue[queueIndex].word}</div>
            <audio
              ref={audioRef}
              controls
              onEnded={handleEnded}
              onPlay={() => { if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing'; }}
              onPause={() => { if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused'; }}
              style={{ width: '100%', height: 32, marginTop: 4 }}
            />
          </div>
          <button className="icon-btn" onClick={next}>⏭</button>
          <button className="icon-btn danger" onClick={closeQueue}>✕</button>
        </div>
      )}

      {saved.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔊</div>
          <div>Saved words မရှိသေးပါ</div>
        </div>
      ) : (
        <div className="panel-card">
          {saved.map(w => {
            const hasAudio = audioWords.has(wordKey(w.word));
            const isCurrent = queue.length > 0 && queue[queueIndex].word === w.word;
            return (
              <div key={w.word} className="saved-word-item" style={isCurrent ? { background: 'var(--accent-bg)' } : undefined}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="saved-word-name">{w.word}</div>
                  <div className="saved-word-meaning">
                    {(w.meanings || []).map(m => m.pos_my || m.pos).filter(Boolean).join(' · ')}
                  </div>
                  {errors[w.word] && (
                    <div style={{ fontSize: 11, color: '#f87171', marginTop: 3 }}>{errors[w.word]}</div>
                  )}
                </div>
                {hasAudio ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {selectMode && (
                      <input type="checkbox" checked={selected.has(w.word)} onChange={() => toggleSelected(w.word)} />
                    )}
                    <button className="icon-btn" onClick={() => playFrom(w)}>▶</button>
                    <button
                      className="icon-btn"
                      title="Regenerate"
                      disabled={!hasKey || busyWord === w.word || !!bulkProgress}
                      onClick={() => generate(w)}
                    >
                      {busyWord === w.word ? '…' : '↻'}
                    </button>
                  </div>
                ) : (
                  <button
                    className="icon-btn"
                    disabled={!hasKey || busyWord === w.word || !!bulkProgress}
                    onClick={() => generate(w)}
                  >
                    {busyWord === w.word ? 'Generating…' : 'Generate'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
