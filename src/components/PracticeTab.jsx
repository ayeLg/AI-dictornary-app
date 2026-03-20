import { useState } from 'react';
import { fetchExplain, fetchWritingFeedback, fetchTranslateMY } from '../lib/groq';

function ReadingSection({ apiKey }) {
  const [dir, setDir] = useState('en_my'); // 'en_my' | 'my_en'
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const switchDir = (d) => { setDir(d); setText(''); setResult(null); setError(null); };

  const analyze = async () => {
    setLoading(true); setError(null); setResult(null);
    try {
      const data = dir === 'en_my'
        ? await fetchExplain(text, apiKey)
        : await fetchTranslateMY(text, apiKey);
      setResult(data);
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  const copyTranslation = () => {
    navigator.clipboard.writeText(result.translation_en).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Highlight difficult words in original English text
  const renderHighlighted = (txt, words) => {
    if (!words?.length) return txt;
    const pattern = new RegExp(`\\b(${words.map(w => w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
    const parts = txt.split(pattern);
    return parts.map((part, i) => {
      const isMatch = words.some(w => w.word.toLowerCase() === part.toLowerCase());
      return isMatch ? <mark key={i} className="difficult-word">{part}</mark> : part;
    });
  };

  return (
    <div style={{padding:'16px 20px'}}>
      {/* Direction toggle */}
      <div className="dir-toggle-row">
        <button className={`dir-toggle-btn${dir === 'en_my' ? ' active' : ''}`} onClick={() => switchDir('en_my')}>
          🇬🇧 EN → MY
        </button>
        <span style={{color:'var(--text3)', fontSize:16}}>⇄</span>
        <button className={`dir-toggle-btn${dir === 'my_en' ? ' active' : ''}`} onClick={() => switchDir('my_en')}>
          MY → EN 🇬🇧
        </button>
      </div>

      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
        {dir === 'en_my'
          ? 'နားမလည်တဲ့ English စာပိုဒ် ကို paste လုပ်ပါ → Myanmar ဖြင့် ရှင်းပြပေးမည်'
          : 'Myanmar စာပိုဒ် ကို paste လုပ်ပါ → English လို ဘာသာပြန်ပေးမည်'}
      </div>

      <textarea
        className="modal-input"
        style={{resize:'vertical', minHeight:120, fontFamily: dir === 'en_my' ? 'var(--font-en)' : 'var(--font-my)', fontSize:14, lineHeight:1.6}}
        placeholder={dir === 'en_my'
          ? 'Paste English text here... (e.g. from a book, article, or documentation)'
          : 'မြန်မာ စာပိုဒ် ဤနေရာတွင် ကူးထည့်ပါ...'}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="btn-primary"
        style={{marginTop:10}}
        onClick={analyze}
        disabled={loading || text.trim().length < 10 || !apiKey}
      >
        {loading
          ? (dir === 'en_my' ? 'Analyzing...' : 'Translating...')
          : (dir === 'en_my' ? '🔍 Analyze Text' : '🌐 Translate to English')}
      </button>

      {error && <div className="error-banner" style={{marginTop:12}}>⚠️ {error}</div>}

      {/* EN → MY result */}
      {result && dir === 'en_my' && (
        <div style={{marginTop:20}}>
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
            <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:8}}>Myanmar Summary</div>
            <div style={{fontFamily:'var(--font-my)', fontSize:15, color:'var(--text)', lineHeight:1.8}}>{result.summary_my}</div>
          </div>

          {result.key_concepts?.length > 0 && (
            <div style={{marginBottom:14}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:8}}>Key Concepts</div>
              <div className="chips-row">
                {result.key_concepts.map((c, i) => <span key={i} className="chip related">{c}</span>)}
              </div>
            </div>
          )}

          {result.difficult_words?.length > 0 && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:10}}>Difficult Words ({result.difficult_words.length})</div>
              {result.difficult_words.map((w, i) => (
                <div key={i} className="difficult-word-item">
                  <div className="difficult-en">{w.word}</div>
                  <div style={{fontSize:12, color:'var(--text3)', marginTop:1}}>{w.meaning_en}</div>
                  <div className="difficult-my">{w.meaning_my}</div>
                </div>
              ))}
            </div>
          )}

          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px'}}>
            <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:8}}>Highlighted Text</div>
            <div style={{fontSize:14, color:'var(--text2)', lineHeight:1.8, fontFamily:'var(--font-en)'}}>
              {renderHighlighted(text, result.difficult_words)}
            </div>
          </div>
        </div>
      )}

      {/* MY → EN result */}
      {result && dir === 'my_en' && (
        <div style={{marginTop:20}}>
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1}}>English Translation</div>
              <button
                onClick={copyTranslation}
                style={{background:'var(--accent-bg)', border:'1px solid rgba(99,102,241,0.3)', color:'var(--accent2)', borderRadius:6, padding:'4px 10px', fontSize:11, fontWeight:700, cursor:'pointer'}}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div style={{fontSize:15, color:'var(--text)', lineHeight:1.8, fontFamily:'var(--font-en)'}}>{result.translation_en}</div>
          </div>

          {result.summary_my && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:8}}>Context</div>
              <div style={{fontFamily:'var(--font-my)', fontSize:14, color:'var(--text2)', lineHeight:1.8}}>{result.summary_my}</div>
            </div>
          )}

          {result.key_vocab?.length > 0 && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px'}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:10}}>Key Vocabulary ({result.key_vocab.length})</div>
              {result.key_vocab.map((v, i) => (
                <div key={i} className="difficult-word-item">
                  <div style={{display:'flex', alignItems:'baseline', gap:8}}>
                    <div style={{fontFamily:'var(--font-my)', fontSize:15, color:'var(--gold)', fontWeight:600}}>{v.word_my}</div>
                    <div style={{fontSize:12, color:'var(--text3)'}}>→</div>
                    <div className="difficult-en">{v.word_en}</div>
                  </div>
                  <div style={{fontSize:12, color:'var(--text3)', marginTop:2}}>{v.meaning_en}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function WritingSection({ apiKey }) {
  const [topic, setTopic] = useState('');
  const [writing, setWriting] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const submit = async () => {
    setLoading(true); setError(null); setResult(null);
    try {
      const data = await fetchWritingFeedback(writing, topic, apiKey);
      setResult(data);
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  const copy = () => {
    navigator.clipboard.writeText(result.corrected).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scoreClass = result ? (result.score >= 8 ? 'good' : result.score >= 5 ? 'ok' : 'bad') : '';
  const scoreColor = result ? (result.score >= 8 ? 'var(--green)' : result.score >= 5 ? 'var(--gold)' : 'var(--red)') : '';

  return (
    <div style={{padding:'16px 20px'}}>
      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
        Topic တစ်ခုနဲ့ English ကိုယ်တိုင်ရေးပါ → AI က feedback ပေးမည်
      </div>
      <input
        className="modal-input"
        style={{marginBottom:10, fontFamily:'var(--font-en)'}}
        placeholder="Topic (e.g. My daily routine, Technology in Myanmar...)"
        value={topic}
        onChange={e => setTopic(e.target.value)}
      />
      <textarea
        className="modal-input"
        style={{resize:'vertical', minHeight:140, fontFamily:'var(--font-en)', fontSize:14, lineHeight:1.6}}
        placeholder="Write your English here..."
        value={writing}
        onChange={e => setWriting(e.target.value)}
      />
      <button
        className="btn-primary"
        style={{marginTop:10}}
        onClick={submit}
        disabled={loading || writing.trim().length < 20 || !apiKey}
      >
        {loading ? 'Checking...' : '✏️ Get Feedback'}
      </button>

      {error && <div className="error-banner" style={{marginTop:12}}>⚠️ {error}</div>}

      {result && (
        <div style={{marginTop:20}}>
          {/* Score + overall feedback */}
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
            <div className="writing-score-row">
              <div className={`score-circle-sm ${scoreClass}`}>
                <div style={{fontFamily:'var(--font-title)', fontSize:22, fontWeight:700, color:scoreColor, lineHeight:1}}>{result.score}</div>
                <div style={{fontSize:9, color:'var(--text3)', fontWeight:700}}>/ 10</div>
              </div>
              <div style={{fontFamily:'var(--font-my)', fontSize:14, color:'var(--text)', lineHeight:1.7}}>{result.overall_feedback_my}</div>
            </div>
          </div>

          {/* Errors */}
          {result.errors?.length > 0 && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:10}}>Corrections ({result.errors.length})</div>
              {result.errors.map((err, i) => (
                <div key={i} style={{paddingBottom:12, marginBottom:12, borderBottom: i < result.errors.length - 1 ? '1px solid var(--border)' : 'none'}}>
                  <div style={{display:'flex', gap:8, alignItems:'center', marginBottom:4, flexWrap:'wrap'}}>
                    <span style={{background:'rgba(239,68,68,0.1)', color:'var(--red)', padding:'2px 8px', borderRadius:6, fontSize:13, fontWeight:600, textDecoration:'line-through'}}>{err.original}</span>
                    <span style={{color:'var(--text3)', fontSize:12}}>→</span>
                    <span style={{background:'rgba(16,185,129,0.1)', color:'var(--green)', padding:'2px 8px', borderRadius:6, fontSize:13, fontWeight:600}}>{err.corrected}</span>
                  </div>
                  <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text2)'}}>{err.explanation_my}</div>
                </div>
              ))}
            </div>
          )}

          {/* Corrected text */}
          {result.corrected && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1}}>Corrected Version</div>
                <button
                  onClick={copy}
                  style={{background:'var(--accent-bg)', border:'1px solid rgba(99,102,241,0.3)', color:'var(--accent2)', borderRadius:6, padding:'4px 10px', fontSize:11, fontWeight:700, cursor:'pointer'}}
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <div style={{fontSize:14, color:'var(--text)', lineHeight:1.7, fontFamily:'var(--font-en)'}}>{result.corrected}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PracticeTab({ apiKey }) {
  const [subTab, setSubTab] = useState('reading');

  return (
    <div className="tab-fade">
      <div className="sub-tab-bar">
        <button className={`sub-tab-btn${subTab === 'reading' ? ' active' : ''}`} onClick={() => setSubTab('reading')}>
          📄 Reading
        </button>
        <button className={`sub-tab-btn${subTab === 'writing' ? ' active' : ''}`} onClick={() => setSubTab('writing')}>
          ✏️ Writing
        </button>
      </div>
      {subTab === 'reading' && <ReadingSection apiKey={apiKey} />}
      {subTab === 'writing' && <WritingSection apiKey={apiKey} />}
    </div>
  );
}
