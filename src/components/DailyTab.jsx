import { useState } from 'react';
import { CONTEXTS, fetchDaily, fetchDailyWordList } from '../lib/groq';
import { lsGet, lsSet } from '../lib/storage';

/* ── Sentence helpers ──────────────────────────────────────────── */
function SentenceItem({ sentence, wordsUsed }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(sentence).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };
  const renderText = () => {
    if (!wordsUsed?.length) return sentence;
    const regex = new RegExp(`(${wordsUsed.map(w => w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})`, 'gi');
    return sentence.split(regex).map((p, i) =>
      wordsUsed.some(w => w.toLowerCase() === p.toLowerCase())
        ? <mark key={i}>{p}</mark> : p
    );
  };
  return (
    <div className="sentence-item">
      <div className="sentence-text">{renderText()}</div>
      <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={copy}>{copied ? '✓' : '⎘'}</button>
    </div>
  );
}

function DailyLoadingState() {
  return (
    <div className="tab-fade">
      <div style={{textAlign:'center', padding:'36px 20px 16px'}}>
        <div style={{fontSize:48, marginBottom:12}}>✨</div>
        <div style={{color:'var(--text2)', fontSize:14}}>Daily sentences တည်ဆောက်နေသည်...</div>
      </div>
      {CONTEXTS.map(c => (
        <div key={c.key} className="skeleton-card" style={{marginBottom:10}}>
          <div className="skeleton" style={{height:12, width:'30%', marginBottom:12}} />
          {[95,82,88].map((w,i) => <div key={i} className="skeleton" style={{height:14, width:`${w}%`, marginBottom:8}} />)}
        </div>
      ))}
    </div>
  );
}

/* ── Word List (Daily Common Words) ───────────────────────────── */
const LEVELS = [
  { key: 'basic',        icon: '🟢', label: 'Basic',        labelMy: 'အခြေခံ',     color: 'var(--green)' },
  { key: 'intermediate', icon: '🟡', label: 'Intermediate', labelMy: 'အလယ်အလတ်', color: 'var(--gold)'  },
  { key: 'advanced',     icon: '🔴', label: 'Advanced',     labelMy: 'အဆင့်မြင့်', color: 'var(--red)'  },
];

const today = () => new Date().toISOString().slice(0, 10);
const cacheKey = (level) => `ming_wlist_${level}_${today()}`;

function WordListSection({ apiKey }) {
  const [level, setLevel] = useState('basic');
  const [words, setWords] = useState(() => lsGet(cacheKey('basic'), null));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flipped, setFlipped] = useState({}); // {idx: bool} show/hide example

  const switchLevel = (lv) => {
    setLevel(lv);
    setWords(lsGet(cacheKey(lv), null));
    setError(null);
    setFlipped({});
  };

  const generate = async () => {
    setLoading(true); setError(null);
    try {
      const data = await fetchDailyWordList(level, apiKey);
      setWords(data);
      lsSet(cacheKey(level), data);
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  const toggleFlip = (i) => setFlipped(p => ({ ...p, [i]: !p[i] }));

  const activeLevel = LEVELS.find(l => l.key === level);

  return (
    <div style={{padding:'16px 20px'}}>
      {/* Level selector */}
      <div style={{display:'flex', gap:8, marginBottom:16}}>
        {LEVELS.map(lv => (
          <button key={lv.key} onClick={() => switchLevel(lv.key)}
            style={{flex:1, padding:'9px 6px', borderRadius:10, border:'1px solid var(--border)',
              background: level === lv.key ? 'var(--card)' : 'transparent',
              borderColor: level === lv.key ? lv.color : 'var(--border)',
              color: level === lv.key ? lv.color : 'var(--text3)', cursor:'pointer'}}>
            <div style={{fontSize:16}}>{lv.icon}</div>
            <div style={{fontSize:11, fontWeight:700, marginTop:2}}>{lv.label}</div>
            <div style={{fontFamily:'var(--font-my)', fontSize:10, color:'var(--text3)'}}>{lv.labelMy}</div>
          </button>
        ))}
      </div>

      <button className="btn-primary" onClick={generate} disabled={loading || !apiKey} style={{marginBottom:16}}>
        {loading ? 'Generating...' : `${activeLevel.icon} Generate ${activeLevel.label} Words`}
      </button>

      {error && <div className="error-banner" style={{marginBottom:12}}>⚠️ {error}</div>}

      {!words && !loading && (
        <div className="empty-state" style={{marginTop:0, paddingTop:20}}>
          <div className="empty-state-icon">📖</div>
          <div style={{fontFamily:'var(--font-my)', fontSize:13}}>
            {activeLevel.label} level words {10} လုံး ထုတ်ပေးမည်
          </div>
        </div>
      )}

      {words && (
        <div style={{display:'flex', flexDirection:'column', gap:10}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:4}}>
            <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1}}>
              {activeLevel.icon} {activeLevel.label} · {words.length} words · {today()}
            </div>
            <button onClick={generate} disabled={loading}
              style={{fontSize:11, color:'var(--accent2)', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-en)'}}>
              ↻ Refresh
            </button>
          </div>

          {words.map((w, i) => (
            <div key={i} className="wlist-card" onClick={() => toggleFlip(i)}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <div>
                  <div style={{display:'flex', alignItems:'baseline', gap:8}}>
                    <div style={{fontFamily:'var(--font-title)', fontSize:20, color:'var(--text)', fontWeight:700}}>{w.word}</div>
                    {w.pos && <div style={{fontSize:11, color:activeLevel.color, fontWeight:700, textTransform:'uppercase'}}>{w.pos}</div>}
                  </div>
                  <div style={{fontFamily:'var(--font-my)', fontSize:14, color:'var(--gold)', marginTop:3}}>{w.myanmar_meaning}</div>
                </div>
                <div style={{fontSize:12, color:'var(--text3)', marginTop:4}}>{flipped[i] ? '▲' : '▼'}</div>
              </div>

              {flipped[i] && w.example_en && (
                <div style={{marginTop:10, paddingTop:10, borderTop:'1px solid var(--border)'}}>
                  <div style={{fontSize:13, color:'var(--text2)', fontFamily:'var(--font-en)', fontStyle:'italic', lineHeight:1.5}}>
                    "{w.example_en}"
                  </div>
                  {w.example_my && (
                    <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text3)', marginTop:4, lineHeight:1.6}}>
                      {w.example_my}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main DailyTab ─────────────────────────────────────────────── */
export default function DailyTab({ apiKey, saved }) {
  const [subTab, setSubTab] = useState('sentences');
  const [dailyState, setDailyState] = useState('idle');
  const [selected, setSelected]     = useState(() => saved.map(w => w.word));
  const [result, setResult]         = useState(null);
  const [error, setError]           = useState(null);
  const MIN = 3;

  const toggle    = (w) => setSelected(p => p.includes(w) ? p.filter(x => x !== w) : [...p, w]);
  const selectAll = () => setSelected(saved.map(w => w.word));
  const clearAll  = () => setSelected([]);

  const generate = async () => {
    const words = saved.filter(w => selected.includes(w.word));
    if (words.length < MIN) return;
    setDailyState('loading'); setError(null);
    try {
      const data = await fetchDaily(words, apiKey);
      setResult(data); setDailyState('done');
    } catch (e) { setError(e.message); setDailyState('idle'); }
  };

  if (subTab === 'sentences' && dailyState === 'loading') return <DailyLoadingState />;

  if (subTab === 'sentences' && dailyState === 'done' && result) return (
    <div className="tab-fade">
      <div className="sub-tab-bar">
        <button className={`sub-tab-btn active`}>✨ Sentences</button>
        <button className="sub-tab-btn" onClick={() => { setSubTab('words'); setDailyState('idle'); }}>📚 Word List</button>
      </div>
      <div style={{padding:'14px 20px 10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontSize:14, fontWeight:600, color:'var(--text)'}}>Daily Sentences</div>
        <button onClick={() => setDailyState('idle')} style={{fontSize:12, color:'var(--accent2)', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-en)'}}>
          ← Regenerate
        </button>
      </div>
      {CONTEXTS.map(ctx => {
        const items = result[ctx.key] || [];
        if (!items.length) return null;
        return (
          <div key={ctx.key} className="context-card">
            <div className="context-header">
              <span className="context-icon">{ctx.icon}</span>
              <span className="context-title">{ctx.label}</span>
            </div>
            {items.map((s, i) => <SentenceItem key={i} sentence={s.sentence} wordsUsed={s.words_used} />)}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="tab-fade">
      <div className="sub-tab-bar">
        <button className={`sub-tab-btn${subTab === 'sentences' ? ' active' : ''}`} onClick={() => setSubTab('sentences')}>✨ Sentences</button>
        <button className={`sub-tab-btn${subTab === 'words' ? ' active' : ''}`} onClick={() => setSubTab('words')}>📚 Word List</button>
      </div>

      {subTab === 'words' && <WordListSection apiKey={apiKey} />}

      {subTab === 'sentences' && (
        <div className="section-wrap">
          <div className="section-title">Daily Usage</div>
          <p style={{fontSize:13, color:'var(--text2)', lineHeight:1.7, marginBottom:16}}>
            Saved words တွေကို တနေ့တာ real-life English sentences ထဲ သုံးပြမည်။
          </p>

          {saved.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📖</div>
              <div>Words မရှိသေးပါ။<br />Dictionary မှ words Save လုပ်ပါ။</div>
            </div>
          ) : (
            <>
              <div className="toggle-controls">
                <div className="section-label" style={{margin:0}}>Words ရွေးပါ ({selected.length}/{saved.length})</div>
                <div style={{display:'flex', gap:10}}>
                  <button className="text-btn" onClick={selectAll}>All</button>
                  <button className="text-btn" onClick={clearAll}>None</button>
                </div>
              </div>
              <div className="word-toggles">
                {saved.map(w => (
                  <button key={w.word} className={`word-toggle${selected.includes(w.word) ? ' on' : ''}`} onClick={() => toggle(w.word)}>
                    {w.word}
                  </button>
                ))}
              </div>
              {error && <div className="error-banner"><span>{error}</span></div>}
              <button className="btn-primary" onClick={generate} disabled={selected.length < MIN} style={{marginTop:4}}>
                {selected.length >= MIN ? '✨ Daily Sentences ထုတ်မည်' : `Words ${MIN} ခုအနည်းဆုံးရွေးပါ`}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
