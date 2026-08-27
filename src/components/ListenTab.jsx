import { useState, useRef, useEffect } from 'react';
import { buildSpeechScript, synthesizeSpeech } from '../lib/geminiTts';
import { saveAudio, getAudio, getAllAudioWords } from '../lib/audioStore';

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

export default function ListenTab({ saved, onSaveToggle, orKey }) {
  const [busyWord, setBusyWord] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState(new Set());
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [loop, setLoop] = useState(false);
  const [bulkProgress, setBulkProgress] = useState(null);
  const [audioWords, setAudioWords] = useState(new Set());
  const audioRef = useRef(null);
  const migratingRef = useRef(new Set());

  const hasKey = !!orKey;
  const generatedWords = saved.filter(w => audioWords.has(wordKey(w.word)));
  const pendingWords = saved.filter(w => !audioWords.has(wordKey(w.word)));

  // Load which words already have audio in IndexedDB (has far more headroom than localStorage).
  useEffect(() => {
    getAllAudioWords().then(keys => setAudioWords(new Set(keys))).catch(() => {});
  }, []);

  // One-time migration: older saves embedded audio_my directly on the word (localStorage/cloud
  // blob) — move it into IndexedDB and strip it off so it stops bloating synced storage.
  useEffect(() => {
    const legacy = saved.filter(w => w.audio_my && !migratingRef.current.has(wordKey(w.word)));
    legacy.forEach(w => {
      migratingRef.current.add(wordKey(w.word));
      saveAudio(w.word, w.audio_my)
        .then(() => {
          setAudioWords(prev => new Set(prev).add(wordKey(w.word)));
          // eslint-disable-next-line no-unused-vars
          const { audio_my, audio_my_at, ...stripped } = w;
          onSaveToggle(stripped, true);
        })
        .catch(() => { migratingRef.current.delete(wordKey(w.word)); });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saved]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || queue.length === 0) return;
    let cancelled = false;
    getAudio(queue[queueIndex].word).then(base64 => {
      if (cancelled || !base64) return;
      el.src = `data:audio/wav;base64,${base64}`;
      el.play().catch(() => {});
    });
    return () => { cancelled = true; };
  }, [queue, queueIndex]);

  const generate = async (word) => {
    if (!hasKey) return;
    setBusyWord(word.word);
    setErrors(prev => ({ ...prev, [word.word]: null }));
    try {
      const text = buildSpeechScript(word);
      const audio_my = await synthesizeSpeech({ text, apiKey: orKey });
      await saveAudio(word.word, audio_my);
      setAudioWords(prev => new Set(prev).add(wordKey(word.word)));
    } catch (e) {
      setErrors(prev => ({ ...prev, [word.word]: e.message || 'Generate မအောင်မြင်ပါ' }));
    } finally {
      setBusyWord(null);
    }
  };

  const generateAll = async () => {
    if (!hasKey || pendingWords.length === 0) return;
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

  const playAll = () => buildQueue(generatedWords, 0);
  const playFrom = (word) => buildQueue(generatedWords, generatedWords.findIndex(w => w.word === word.word));
  const playRandom = (n) => buildQueue(shuffled(generatedWords).slice(0, n), 0);
  const playSelected = () => buildQueue(generatedWords.filter(w => selected.has(w.word)), 0);

  const toggleSelected = (word) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(word) ? next.delete(word) : next.add(word);
      return next;
    });
  };

  const next = () => setQueueIndex(i => (i + 1 < queue.length ? i + 1 : (loop ? 0 : i)));
  const prev = () => setQueueIndex(i => (i > 0 ? i - 1 : (loop ? queue.length - 1 : 0)));
  const handleEnded = () => setQueueIndex(i => (i + 1 < queue.length ? i + 1 : (loop ? 0 : i)));
  const closeQueue = () => {
    if (audioRef.current) audioRef.current.pause();
    setQueue([]);
    setQueueIndex(0);
  };

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
            <button key={n} className="icon-btn" onClick={() => playRandom(n)}>🔀 {n}</button>
          ))}
          <button className="icon-btn" onClick={() => playRandom(generatedWords.length)}>🔀 All</button>
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
            <audio ref={audioRef} controls onEnded={handleEnded} style={{ width: '100%', height: 32, marginTop: 4 }} />
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
