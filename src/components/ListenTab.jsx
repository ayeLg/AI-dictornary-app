import { useState } from 'react';
import { buildSpeechScript, synthesizeSpeech } from '../lib/geminiTts';

export default function ListenTab({ saved, onSaveToggle, orKey }) {
  const [busyWord, setBusyWord] = useState(null);
  const [errors, setErrors] = useState({});

  const hasKey = !!orKey;

  const generate = async (word) => {
    if (!hasKey) return;
    setBusyWord(word.word);
    setErrors(prev => ({ ...prev, [word.word]: null }));
    try {
      const text = buildSpeechScript(word);
      const audio_my = await synthesizeSpeech({ text, apiKey: orKey });
      onSaveToggle({ ...word, audio_my, audio_my_at: Date.now() }, true);
    } catch (e) {
      setErrors(prev => ({ ...prev, [word.word]: e.message || 'Generate မအောင်မြင်ပါ' }));
    } finally {
      setBusyWord(null);
    }
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

      {saved.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔊</div>
          <div>Saved words မရှိသေးပါ</div>
        </div>
      ) : (
        <div className="panel-card">
          {saved.map(w => (
            <div key={w.word} className="saved-word-item">
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="saved-word-name">{w.word}</div>
                <div className="saved-word-meaning">
                  {(w.meanings || []).map(m => m.pos_my || m.pos).filter(Boolean).join(' · ')}
                </div>
                {errors[w.word] && (
                  <div style={{ fontSize: 11, color: '#f87171', marginTop: 3 }}>{errors[w.word]}</div>
                )}
              </div>
              {w.audio_my ? (
                <audio controls preload="none" style={{ height: 32, maxWidth: 160 }} src={`data:audio/mp3;base64,${w.audio_my}`} />
              ) : (
                <button
                  className="icon-btn"
                  disabled={!hasKey || busyWord === w.word}
                  onClick={() => generate(w)}
                >
                  {busyWord === w.word ? 'Generating…' : 'Generate'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
