import { useState, useMemo } from 'react';
import { KEYS, lsGet, lsSet } from '../lib/storage';
import SavedWordModal from './SavedWordModal';

function getMasteryLevel(srs) {
  if (!srs || srs.reps === 0) return 'New';
  if (srs.reps <= 2) return 'Learning';
  if (srs.reps >= 5 && srs.interval > 14) return 'Mastered';
  return 'Familiar';
}

const OR_MODELS = [
  { value: '', label: 'Auto (recommended)', desc: 'Fast for dict, full for story/chat' },
  { value: 'meta-llama/llama-3.3-70b-instruct:free', label: 'Llama 3.3 70B (Free)', desc: 'Best quality — free tier' },
  { value: 'meta-llama/llama-3.1-8b-instruct:free', label: 'Llama 3.1 8B (Free)', desc: 'Fastest — free tier' },
  { value: 'google/gemma-3-27b-it:free', label: 'Gemma 3 27B (Free)', desc: 'Google — free tier' },
  { value: 'mistralai/mistral-7b-instruct:free', label: 'Mistral 7B (Free)', desc: 'Efficient — free tier' },
  { value: 'deepseek/deepseek-chat-v3-0324:free', label: 'DeepSeek V3 (Free)', desc: 'DeepSeek chat — free tier' },
];

export default function ProfileTab({ apiKey, saved, orKey, onSaveOrKey, orModel, onSaveOrModel, onEditKey, onRemoveWord, onSwitchTab, onSaveToggle, user, syncing, onLogin, onLogout, srsData = {}, streak = { lastDate: '', count: 0 } }) {
  const [quizHist, setQuizHist] = useState(() => lsGet(KEYS.QUIZ_HIST, []));
  const [searchHist, setSearchHist] = useState(() => lsGet(KEYS.HISTORY, []));
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordSearch, setWordSearch] = useState('');
  const [orInput, setOrInput] = useState(orKey || '');
  const [orSaved, setOrSaved] = useState(false);
  const freq = lsGet(KEYS.FREQ, {});

  const totalSearches = Object.values(freq).reduce((a, b) => a + b, 0);
  const avgScore = quizHist.length > 0
    ? Math.round(quizHist.reduce((a, h) => a + (h.score / h.total) * 100, 0) / quizHist.length)
    : null;

  const masked = apiKey
    ? apiKey.slice(0, 8) + '••••••••' + apiKey.slice(-4)
    : 'မထည့်ရသေးပါ';

  const clearQuizHist = () => { lsSet(KEYS.QUIZ_HIST, []); setQuizHist([]); };

  const saveOrKey = () => {
    onSaveOrKey(orInput.trim());
    setOrSaved(true);
    setTimeout(() => setOrSaved(false), 2000);
  };

  const masteryColors = { New: 'var(--text3)', Learning: 'var(--gold)', Familiar: 'var(--accent2)', Mastered: 'var(--green)' };

  const breakdown = useMemo(() => {
    const b = { New: 0, Learning: 0, Familiar: 0, Mastered: 0 };
    saved.forEach(w => b[getMasteryLevel(srsData[w.word])]++);
    return b;
  }, [saved, srsData]);

  const activityData = useMemo(() => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const count = quizHist.filter(h => h.date && h.date.slice(0, 10) === dateStr).length;
      days.push({ dateStr, count, label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 1) });
    }
    return days;
  }, [quizHist]);

  const maxActivity = Math.max(...activityData.map(d => d.count), 1);

  return (
    <div className="section-wrap tab-fade">
      <div className="section-title">Profile</div>

      {/* Streak Card */}
      {streak.count > 0 && (
        <div className="streak-card">
          <div style={{ fontSize: 40 }}>🔥</div>
          <div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: 36, fontWeight: 700, lineHeight: 1, color: '#fff' }}>{streak.count}</div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>Day Streak</div>
          </div>
        </div>
      )}

      {/* Cloud Sync Card */}
      <div className="panel-card" style={{ marginBottom: 16 }}>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={user.photoURL} alt="" style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{user.displayName}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)' }}>{syncing ? '⟳ Cloud sync လုပ်နေသည်…' : '✓ Cloud sync ဖြစ်ပြီးပြီ'}</div>
            </div>
            <button className="icon-btn danger" onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 12 }}>Google account နဲ့ login လုပ်ပြီး<br />devices အားလုံးမှာ sync ဖြစ်စေပါ</div>
            <button
              onClick={onLogin}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#1a1a1a', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.43-8.83l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>
              Sign in with Google
            </button>
          </div>
        )}
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        <div className="stat-chip">
          <div className="stat-num">{saved.length}</div>
          <div className="stat-label">Words</div>
        </div>
        <div className="stat-chip">
          <div className="stat-num">{totalSearches}</div>
          <div className="stat-label">Searches</div>
        </div>
        <div className="stat-chip">
          <div className="stat-num">{avgScore !== null ? `${avgScore}%` : '—'}</div>
          <div className="stat-label">Quiz Avg</div>
        </div>
      </div>

      {/* Mastery Breakdown */}
      {saved.length > 0 && (
        <div className="mastery-grid" style={{ marginBottom: 14 }}>
          {Object.entries(breakdown).map(([level, count]) => (
            <div key={level} className="mastery-chip">
              <div className="mastery-num" style={{ color: masteryColors[level] }}>{count}</div>
              <div className="mastery-label">{level}</div>
            </div>
          ))}
        </div>
      )}

      {/* 7-day Activity Chart */}
      {quizHist.length > 0 && (
        <div className="panel-card" style={{ marginBottom: 14, padding: '12px 14px 8px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Quiz Activity (7 days)</div>
          <svg width="100%" height="64" viewBox="0 0 210 64" preserveAspectRatio="none">
            {activityData.map((d, i) => {
              const barH = d.count > 0 ? Math.max(6, (d.count / maxActivity) * 44) : 3;
              const x = i * 30 + 3;
              return (
                <g key={i}>
                  <rect
                    x={x} y={48 - barH} width={24} height={barH}
                    rx={3}
                    fill={d.count > 0 ? 'var(--accent)' : 'rgba(255,255,255,0.06)'}
                  />
                  <text x={x + 12} y={60} textAnchor="middle" fontSize={8} fill="var(--text3)" fontFamily="sans-serif">{d.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* API Keys */}
      <div className="panel-card">
        <div className="panel-row">
          <div>
            <div className="panel-row-label">Groq API Key</div>
            <div className="panel-row-value">{masked}</div>
          </div>
          <button className="icon-btn" onClick={onEditKey}>Edit</button>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
            OpenRouter API Key
            <span style={{ marginLeft: 6, fontSize: 10, color: 'var(--accent2)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
              (Groq limit ပြည့်ရင် auto-fallback)
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              className="modal-input"
              type="password"
              placeholder="sk-or-..."
              value={orInput}
              onChange={e => setOrInput(e.target.value)}
              style={{ fontSize: 13, padding: '8px 12px', flex: 1 }}
            />
            <button
              className="icon-btn"
              onClick={saveOrKey}
              disabled={orInput.trim() === (orKey || '')}
              style={{ flexShrink: 0, color: orSaved ? 'var(--green)' : undefined }}
            >
              {orSaved ? '✓' : 'Save'}
            </button>
          </div>
          {!orKey && (
            <a href="https://openrouter.ai/keys" target="_blank" rel="noreferrer"
              style={{ fontSize: 11, color: 'var(--accent2)', marginTop: 6, display: 'block' }}>
              → OpenRouter မှာ API Key ရယူမည် (Free tier ရှိ)
            </a>
          )}
          {/* Model selector — only show if OR key is set */}
          {orKey && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
                OpenRouter Model
              </div>
              <select
                value={orModel || ''}
                onChange={e => onSaveOrModel(e.target.value)}
                style={{
                  width: '100%', padding: '8px 10px', borderRadius: 8,
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  color: 'var(--text)', fontSize: 13, cursor: 'pointer',
                }}
              >
                {OR_MODELS.map(m => (
                  <option key={m.value} value={m.value}>
                    {m.label} — {m.desc}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Saved Words */}
      <div className="section-label" style={{ marginBottom: 9, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Saved Words ({saved.length})</span>
      </div>
      {selectedWord && (
        <SavedWordModal
          word={selectedWord}
          onClose={() => setSelectedWord(null)}
          onRemove={onRemoveWord}
          onUpdate={onSaveToggle ? (updated) => { onSaveToggle(updated, true); setSelectedWord(updated); } : null}
        />
      )}
      {saved.length === 0 ? (
        <div className="empty-state" style={{ padding: '20px 0' }}>
          <div className="empty-state-icon">🔖</div>
          <div>Saved words မရှိသေးပါ</div>
        </div>
      ) : (
        <>
          {/* Search box */}
          <div style={{ position: 'relative', marginBottom: 10 }}>
            <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: 'var(--text3)', pointerEvents: 'none' }}>🔍</span>
            <input
              className="modal-input"
              style={{ paddingLeft: 32, fontSize: 13, padding: '9px 12px 9px 32px' }}
              placeholder="Search saved words..."
              value={wordSearch}
              onChange={e => setWordSearch(e.target.value)}
            />
            {wordSearch && (
              <button onClick={() => setWordSearch('')}
                style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--text3)' }}>✕</button>
            )}
          </div>

          <div className="panel-card">
            {saved.filter(w => !wordSearch.trim() || w.word.toLowerCase().includes(wordSearch.toLowerCase())).length === 0 ? (
              <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text3)', fontSize: 13 }}>
                "{wordSearch}" — ရှာမတွေ့ပါ
              </div>
            ) : (
              saved.filter(w => !wordSearch.trim() || w.word.toLowerCase().includes(wordSearch.toLowerCase())).map(w => {
                const displayMy = w.meanings?.[0]?.definitions?.[0]?.definition_my || w.myanmar_meaning || '';
                return (
                  <div key={w.word} className="saved-word-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedWord(w)}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <div className="saved-word-name">{w.word}</div>
                        {freq[w.word] > 0 && (
                          <span className="freq-badge">{freq[w.word]}×</span>
                        )}
                        <span style={{ fontSize: 10, color: masteryColors[getMasteryLevel(srsData[w.word])], fontWeight: 700 }}>
                          {getMasteryLevel(srsData[w.word])}
                        </span>
                      </div>
                      <div className="saved-word-meaning">
                        {displayMy.slice(0, 48)}{displayMy.length > 48 ? '…' : ''}
                      </div>
                    </div>
                    <button className="icon-btn danger" onClick={e => { e.stopPropagation(); onRemoveWord(w.word); }}>Remove</button>
                  </div>
                );
              })
            )}
          </div>
        </>
      )}

      {/* Search History */}
      {searchHist.length > 0 && (
        <>
          <div className="section-label" style={{ marginBottom: 9, marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Search History ({searchHist.length})</span>
            <button className="text-btn" onClick={() => { lsSet(KEYS.HISTORY, []); setSearchHist([]); }}>Clear</button>
          </div>
          <div className="panel-card" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '12px 14px' }}>
            {searchHist.map((w, i) => (
              <button key={i} onClick={() => onSwitchTab && onSwitchTab(w)}
                style={{ background: 'var(--surface2)', border: '1px solid var(--border2)', borderRadius: 20, padding: '5px 13px', fontSize: 13, color: 'var(--text2)', cursor: 'pointer', fontFamily: 'var(--font-en)' }}>
                {w}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Quiz History */}
      {quizHist.length > 0 && (
        <>
          <div className="section-label" style={{ marginBottom: 9, marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Quiz History ({quizHist.length})</span>
            <button className="text-btn" onClick={clearQuizHist}>Clear</button>
          </div>
          <div className="panel-card">
            {quizHist.map((h, i) => {
              const pct = Math.round((h.score / h.total) * 100);
              const grade = pct >= 80 ? 'good' : pct >= 60 ? 'ok' : 'bad';
              return (
                <div key={i} className="qhist-item">
                  <div>
                    <div className={`qhist-score ${grade}`}>{h.score}/{h.total}</div>
                    <div className="qhist-date">
                      {new Date(h.date).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <div style={{ fontSize: 20 }}>{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <p style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center', marginTop: 8 }}>
        Mingalar v2.0
      </p>
    </div>
  );
}
