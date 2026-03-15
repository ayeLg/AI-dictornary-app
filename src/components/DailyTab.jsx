import { useState } from 'react';
import { CONTEXTS } from '../lib/groq';
import { fetchDaily } from '../lib/groq';

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

export default function DailyTab({ apiKey, saved }) {
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

  if (dailyState === 'loading') return <DailyLoadingState />;

  if (dailyState === 'done' && result) return (
    <div className="tab-fade">
      <div style={{padding:'14px 20px 10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontSize:14, fontWeight:600, color:'var(--text)'}}>Daily Sentences</div>
        <button onClick={() => { setDailyState('idle'); setResult(null); }} style={{fontSize:12, color:'var(--accent2)', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-en)'}}>
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
    <div className="section-wrap tab-fade">
      <div className="section-title">Daily Usage</div>
      <p style={{fontSize:13, color:'var(--text2)', lineHeight:1.7, marginBottom:16}}>
        Saved words တွေကို တနေ့တာ real-life English sentences ထဲ သုံးပြမည်။
        Think in English — Myanmar → English translate မလုပ်ဘဲ တိုက်ရိုက်တွေးနိုင်အောင်ပါ။
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
  );
}
