import { useState, useRef, useEffect } from 'react';
import { fetchExplain, fetchWritingFeedback, fetchTranslateMY, fetchConversation, fetchStory, fetchVoiceOpener, fetchVoiceReply } from '../lib/groq';

/* ── Reading Section (EN↔MY) ─────────────────────────────────────── */
function ReadingSection({ apiKey }) {
  const [dir, setDir] = useState('en_my');
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
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

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
      <div className="dir-toggle-row">
        <button className={`dir-toggle-btn${dir === 'en_my' ? ' active' : ''}`} onClick={() => switchDir('en_my')}>🇬🇧 EN → MY</button>
        <span style={{color:'var(--text3)', fontSize:16}}>⇄</span>
        <button className={`dir-toggle-btn${dir === 'my_en' ? ' active' : ''}`} onClick={() => switchDir('my_en')}>MY → EN 🇬🇧</button>
      </div>
      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
        {dir === 'en_my' ? 'နားမလည်တဲ့ English စာပိုဒ် ကို paste လုပ်ပါ → Myanmar ဖြင့် ရှင်းပြပေးမည်' : 'Myanmar စာပိုဒ် ကို paste လုပ်ပါ → English လို ဘာသာပြန်ပေးမည်'}
      </div>
      <textarea
        className="modal-input"
        style={{resize:'vertical', minHeight:120, fontFamily: dir === 'en_my' ? 'var(--font-en)' : 'var(--font-my)', fontSize:14, lineHeight:1.6}}
        placeholder={dir === 'en_my' ? 'Paste English text here... (e.g. from a book, article, or documentation)' : 'မြန်မာ စာပိုဒ် ဤနေရာတွင် ကူးထည့်ပါ...'}
        value={text} onChange={e => setText(e.target.value)}
      />
      <button className="btn-primary" style={{marginTop:10}} onClick={analyze} disabled={loading || text.trim().length < 10 || !apiKey}>
        {loading ? (dir === 'en_my' ? 'Analyzing...' : 'Translating...') : (dir === 'en_my' ? '🔍 Analyze Text' : '🌐 Translate to English')}
      </button>
      {error && <div className="error-banner" style={{marginTop:12}}>⚠️ {error}</div>}

      {result && dir === 'en_my' && (
        <div style={{marginTop:20}}>
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
            <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:8}}>Myanmar Summary</div>
            <div style={{fontFamily:'var(--font-my)', fontSize:15, color:'var(--text)', lineHeight:1.8}}>{result.summary_my}</div>
          </div>
          {result.key_concepts?.length > 0 && (
            <div style={{marginBottom:14}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:8}}>Key Concepts</div>
              <div className="chips-row">{result.key_concepts.map((c, i) => <span key={i} className="chip related">{c}</span>)}</div>
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
            <div style={{fontSize:14, color:'var(--text2)', lineHeight:1.8, fontFamily:'var(--font-en)'}}>{renderHighlighted(text, result.difficult_words)}</div>
          </div>
        </div>
      )}

      {result && dir === 'my_en' && (
        <div style={{marginTop:20}}>
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1}}>English Translation</div>
              <button onClick={copyTranslation} style={{background:'var(--accent-bg)', border:'1px solid rgba(99,102,241,0.3)', color:'var(--accent2)', borderRadius:6, padding:'4px 10px', fontSize:11, fontWeight:700, cursor:'pointer'}}>
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

/* ── Writing Coach Section ───────────────────────────────────────── */
function WritingSection({ apiKey }) {
  const [topic, setTopic] = useState('');
  const [writing, setWriting] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const submit = async () => {
    setLoading(true); setError(null); setResult(null);
    try { const data = await fetchWritingFeedback(writing, topic, apiKey); setResult(data); }
    catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  const copy = () => {
    navigator.clipboard.writeText(result.corrected).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const scoreColor = result ? (result.score >= 8 ? 'var(--green)' : result.score >= 5 ? 'var(--gold)' : 'var(--red)') : '';
  const scoreClass = result ? (result.score >= 8 ? 'good' : result.score >= 5 ? 'ok' : 'bad') : '';

  return (
    <div style={{padding:'16px 20px'}}>
      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
        Topic တစ်ခုနဲ့ English ကိုယ်တိုင်ရေးပါ → AI က feedback ပေးမည်
      </div>
      <input className="modal-input" style={{marginBottom:10, fontFamily:'var(--font-en)'}} placeholder="Topic (e.g. My daily routine, Technology in Myanmar...)" value={topic} onChange={e => setTopic(e.target.value)} />
      <textarea className="modal-input" style={{resize:'vertical', minHeight:140, fontFamily:'var(--font-en)', fontSize:14, lineHeight:1.6}} placeholder="Write your English here..." value={writing} onChange={e => setWriting(e.target.value)} />
      <button className="btn-primary" style={{marginTop:10}} onClick={submit} disabled={loading || writing.trim().length < 20 || !apiKey}>
        {loading ? 'Checking...' : '✏️ Get Feedback'}
      </button>
      {error && <div className="error-banner" style={{marginTop:12}}>⚠️ {error}</div>}

      {result && (
        <div style={{marginTop:20}}>
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px', marginBottom:14}}>
            <div className="writing-score-row">
              <div className={`score-circle-sm ${scoreClass}`}>
                <div style={{fontFamily:'var(--font-title)', fontSize:22, fontWeight:700, color:scoreColor, lineHeight:1}}>{result.score}</div>
                <div style={{fontSize:9, color:'var(--text3)', fontWeight:700}}>/ 10</div>
              </div>
              <div style={{fontFamily:'var(--font-my)', fontSize:14, color:'var(--text)', lineHeight:1.7}}>{result.overall_feedback_my}</div>
            </div>
          </div>
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
          {result.corrected && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1}}>Corrected Version</div>
                <button onClick={copy} style={{background:'var(--accent-bg)', border:'1px solid rgba(99,102,241,0.3)', color:'var(--accent2)', borderRadius:6, padding:'4px 10px', fontSize:11, fontWeight:700, cursor:'pointer'}}>
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

/* ── Conversation Section ────────────────────────────────────────── */
const CONV_TOPICS = ['At a coffee shop', 'Job interview', 'Meeting a friend', 'Shopping', 'At the doctor', 'Asking for directions'];
const CONV_LEVELS = [
  { key: 'beginner', label: '🟢 Beginner', labelMy: 'အခြေခံ' },
  { key: 'intermediate', label: '🟡 Intermediate', labelMy: 'အလယ်အလတ်' },
  { key: 'advanced', label: '🔴 Advanced', labelMy: 'အဆင့်မြင့်' },
];

function ConversationSection({ apiKey }) {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('intermediate');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);

  const generate = async () => {
    const t = topic.trim() || 'General conversation';
    setLoading(true); setError(null); setResult(null); setShowTranslation(false);
    try { const data = await fetchConversation(t, level, apiKey); setResult(data); }
    catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  return (
    <div style={{padding:'16px 20px'}}>
      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
        Topic ရွေးပြီး English conversation ကို ဖတ်လေ့လာပါ
      </div>

      {/* Topic chips */}
      <div style={{marginBottom:10}}>
        <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:6}}>Quick Topics</div>
        <div className="chips-row" style={{flexWrap:'wrap', gap:6}}>
          {CONV_TOPICS.map(t => (
            <button key={t} onClick={() => setTopic(t)}
              style={{padding:'5px 11px', borderRadius:20, fontSize:12, border:'1px solid var(--border)', background: topic === t ? 'var(--accent-bg)' : 'var(--card)', color: topic === t ? 'var(--accent2)' : 'var(--text2)', cursor:'pointer', fontFamily:'var(--font-en)', fontWeight:600}}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Custom topic */}
      <input className="modal-input" style={{marginBottom:10, fontFamily:'var(--font-en)'}}
        placeholder="Or type your own topic..."
        value={topic} onChange={e => setTopic(e.target.value)} />

      {/* Level selector */}
      <div style={{display:'flex', gap:8, marginBottom:14}}>
        {CONV_LEVELS.map(l => (
          <button key={l.key} onClick={() => setLevel(l.key)}
            style={{flex:1, padding:'7px 4px', borderRadius:8, fontSize:11, fontWeight:700, border:'1px solid var(--border)', background: level === l.key ? 'var(--accent-bg)' : 'var(--card)', color: level === l.key ? 'var(--accent2)' : 'var(--text3)', cursor:'pointer'}}>
            {l.label}<br/>
            <span style={{fontFamily:'var(--font-my)', fontSize:10, fontWeight:400}}>{l.labelMy}</span>
          </button>
        ))}
      </div>

      <button className="btn-primary" onClick={generate} disabled={loading || !apiKey}>
        {loading ? 'Generating...' : '💬 Generate Conversation'}
      </button>
      {error && <div className="error-banner" style={{marginTop:12}}>⚠️ {error}</div>}

      {result && (
        <div style={{marginTop:20}}>
          {/* Situation */}
          <div style={{background:'var(--accent-bg)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:10, padding:'10px 14px', marginBottom:14}}>
            <div style={{fontSize:12, color:'var(--accent2)', fontWeight:700, marginBottom:3}}>{result.situation}</div>
            <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text3)'}}>{result.situation_my}</div>
          </div>

          {/* Translation toggle */}
          <div style={{display:'flex', justifyContent:'flex-end', marginBottom:10}}>
            <button onClick={() => setShowTranslation(v => !v)}
              style={{fontSize:11, fontWeight:700, color:'var(--text3)', background:'var(--card)', border:'1px solid var(--border)', borderRadius:6, padding:'4px 12px', cursor:'pointer'}}>
              {showTranslation ? '🙈 Hide Translation' : '👁 Show Translation'}
            </button>
          </div>

          {/* Dialogue */}
          <div style={{display:'flex', flexDirection:'column', gap:10, marginBottom:16}}>
            {result.dialogue?.map((line, i) => {
              const isA = line.speaker === 'A';
              return (
                <div key={i} className={`chat-bubble-wrap ${isA ? 'left' : 'right'}`}>
                  <div className={`chat-bubble ${isA ? 'bubble-a' : 'bubble-b'}`}>
                    <div className="chat-speaker">{line.name || line.speaker}</div>
                    <div className="chat-text">{line.text}</div>
                    {showTranslation && <div className="chat-translation">{line.translation_my}</div>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Useful phrases */}
          {result.useful_phrases?.length > 0 && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px'}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:1, marginBottom:10}}>💡 Useful Phrases ({result.useful_phrases.length})</div>
              {result.useful_phrases.map((p, i) => (
                <div key={i} className="difficult-word-item">
                  <div style={{fontFamily:'var(--font-en)', fontSize:14, color:'var(--gold)', fontWeight:600}}>"{p.phrase}"</div>
                  <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text2)', marginTop:2}}>{p.meaning_my}</div>
                  <div style={{fontSize:11, color:'var(--text3)', marginTop:1, fontStyle:'italic'}}>{p.usage}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Story Section ───────────────────────────────────────────────── */
const STORY_GENRES = [
  { key: 'Short Story', icon: '📖', labelMy: 'တိုတောင်းသောဇာတ်လမ်း' },
  { key: 'Science', icon: '🔬', labelMy: 'သိပ္ပံဆောင်းပါး' },
  { key: 'History', icon: '🏛️', labelMy: 'သမိုင်းကြောင်း' },
  { key: 'Adventure', icon: '🗺️', labelMy: 'စွန့်စားမှု' },
];

function StorySection({ apiKey }) {
  const [genre, setGenre] = useState('Short Story');
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showWords, setShowWords] = useState(false);
  const [showQ, setShowQ] = useState(false);

  const generate = async () => {
    const t = topic.trim() || 'an interesting topic';
    setLoading(true); setError(null); setResult(null); setShowWords(false); setShowQ(false);
    try { const data = await fetchStory(t, genre, apiKey); setResult(data); }
    catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  // Highlight difficult words in paragraphs
  const renderParagraph = (txt, words) => {
    if (!words?.length) return txt;
    const pattern = new RegExp(`\\b(${words.map(w => w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
    const parts = txt.split(pattern);
    return parts.map((part, i) => {
      const match = words.find(w => w.word.toLowerCase() === part.toLowerCase());
      return match ? <mark key={i} className="difficult-word" title={match.meaning_en}>{part}</mark> : part;
    });
  };

  const wordCount = result?.paragraphs?.join(' ').split(/\s+/).length || 0;

  return (
    <div style={{padding:'16px 20px'}}>
      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
        Genre ရွေးပြီး topic ထည့်ပါ → AI က English စာပိုဒ် ၅ပုဒ် ရေးပေးမည်
      </div>

      {/* Genre pills */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:12}}>
        {STORY_GENRES.map(g => (
          <button key={g.key} onClick={() => setGenre(g.key)}
            style={{padding:'10px 8px', borderRadius:10, border:'1px solid var(--border)', background: genre === g.key ? 'var(--accent-bg)' : 'var(--card)', color: genre === g.key ? 'var(--accent2)' : 'var(--text2)', cursor:'pointer', textAlign:'left'}}>
            <div style={{fontSize:18, marginBottom:2}}>{g.icon}</div>
            <div style={{fontSize:12, fontWeight:700}}>{g.key}</div>
            <div style={{fontFamily:'var(--font-my)', fontSize:10, color:'var(--text3)'}}>{g.labelMy}</div>
          </button>
        ))}
      </div>

      <input className="modal-input" style={{marginBottom:10, fontFamily:'var(--font-en)'}}
        placeholder="Topic (e.g. A lost explorer, How black holes work, The fall of Rome...)"
        value={topic} onChange={e => setTopic(e.target.value)} />

      <button className="btn-primary" onClick={generate} disabled={loading || !apiKey}>
        {loading ? 'Writing story...' : `📚 Generate ${genre}`}
      </button>
      {error && <div className="error-banner" style={{marginTop:12}}>⚠️ {error}</div>}

      {result && (
        <div style={{marginTop:20}}>
          {/* Title + meta */}
          <div style={{marginBottom:16, textAlign:'center'}}>
            <div style={{fontFamily:'var(--font-title)', fontSize:22, color:'var(--text)', fontWeight:700, marginBottom:4}}>{result.title}</div>
            <div style={{display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap'}}>
              <span style={{fontSize:11, color:'var(--text3)', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'2px 10px'}}>{result.genre}</span>
              <span style={{fontSize:11, color:'var(--text3)', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'2px 10px'}}>~{wordCount} words</span>
              <span style={{fontSize:11, color:'var(--text3)', background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'2px 10px'}}>{result.paragraphs?.length} paragraphs</span>
            </div>
          </div>

          {/* Myanmar intro */}
          {result.intro_my && (
            <div style={{background:'var(--accent-bg)', border:'1px solid rgba(99,102,241,0.2)', borderRadius:10, padding:'10px 14px', marginBottom:14}}>
              <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--accent2)', lineHeight:1.7}}>{result.intro_my}</div>
            </div>
          )}

          {/* Story paragraphs */}
          <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'18px 16px', marginBottom:14}}>
            {result.paragraphs?.map((para, i) => (
              <p key={i} style={{fontFamily:'var(--font-en)', fontSize:15, color:'var(--text)', lineHeight:1.85, marginBottom: i < result.paragraphs.length - 1 ? 16 : 0, textIndent:'1.5em'}}>
                {renderParagraph(para, result.difficult_words)}
              </p>
            ))}
          </div>

          {/* Difficult words (collapsible) */}
          {result.difficult_words?.length > 0 && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, marginBottom:14, overflow:'hidden'}}>
              <button onClick={() => setShowWords(v => !v)} style={{width:'100%', padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'none', border:'none', cursor:'pointer', color:'var(--text)'}}>
                <span style={{fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:1}}>📝 Vocabulary ({result.difficult_words.length} words)</span>
                <span style={{fontSize:14, color:'var(--text3)'}}>{showWords ? '▲' : '▼'}</span>
              </button>
              {showWords && (
                <div style={{padding:'0 14px 14px'}}>
                  {result.difficult_words.map((w, i) => (
                    <div key={i} className="difficult-word-item">
                      <div className="difficult-en">{w.word}</div>
                      <div style={{fontSize:12, color:'var(--text3)', marginTop:1}}>{w.meaning_en}</div>
                      <div className="difficult-my">{w.meaning_my}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Comprehension questions (collapsible) */}
          {result.comprehension_my?.length > 0 && (
            <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden'}}>
              <button onClick={() => setShowQ(v => !v)} style={{width:'100%', padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'none', border:'none', cursor:'pointer', color:'var(--text)'}}>
                <span style={{fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:1}}>❓ Comprehension Questions</span>
                <span style={{fontSize:14, color:'var(--text3)'}}>{showQ ? '▲' : '▼'}</span>
              </button>
              {showQ && (
                <div style={{padding:'0 14px 14px'}}>
                  {result.comprehension_my.map((q, i) => (
                    <div key={i} style={{display:'flex', gap:10, marginBottom:10, paddingBottom:10, borderBottom: i < result.comprehension_my.length - 1 ? '1px solid var(--border)' : 'none'}}>
                      <div style={{fontSize:14, color:'var(--gold)', fontWeight:700, minWidth:20}}>Q{i+1}</div>
                      <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', lineHeight:1.7}}>{q}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Voice Section ───────────────────────────────────────────────── */
const VOICE_TOPICS = [
  { key: 'travel',      icon: '✈️', label: 'Travel' },
  { key: 'food',        icon: '🍜', label: 'Food' },
  { key: 'movies',      icon: '🎬', label: 'Movies' },
  { key: 'daily life',  icon: '🌅', label: 'Daily Life' },
  { key: 'work/study',  icon: '💼', label: 'Work/Study' },
  { key: 'hobbies',     icon: '🎮', label: 'Hobbies' },
];

function VoiceSection({ apiKey }) {
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState([]);
  const [started, setStarted] = useState(false);
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMy, setShowMy] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [transcript, setTranscript] = useState('');
  const recogRef = useRef(null);
  const messagesEndRef = useRef(null);
  const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  };

  const addMessage = (role, text_en, text_my) =>
    setMessages(prev => [...prev, { role, text_en, text_my, id: Date.now() }]);

  const startConversation = async () => {
    setStarted(true);
    setMessages([]);
    setSuggestions([]);
    setLoading(true);
    try {
      const data = await fetchVoiceOpener(topic, apiKey);
      addMessage('ai', data.opener_en, data.opener_my);
      setSuggestions(data.suggested_replies || []);
      speak(data.opener_en);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    addMessage('user', text, '');
    setSuggestions([]);
    setLoading(true);
    try {
      const history = messages.map(m => ({ role: m.role, text: m.text_en }));
      const data = await fetchVoiceReply(topic, history, text, apiKey);
      addMessage('ai', data.reply_en, data.reply_my);
      setSuggestions(data.suggested_replies || []);
      speak(data.reply_en);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const toggleListen = () => {
    if (listening) {
      recogRef.current?.stop();
      setListening(false);
      return;
    }
    if (!SR) return;
    const recognition = new SR();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;
    recogRef.current = recognition;
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      setListening(false);
      sendMessage(text);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);
    setTranscript('');
    window.speechSynthesis.cancel();
  };

  const reset = () => {
    setStarted(false);
    setMessages([]);
    setSuggestions([]);
    setTranscript('');
    setListening(false);
    recogRef.current?.stop();
    window.speechSynthesis.cancel();
  };

  if (!started) {
    return (
      <div style={{padding:'16px 20px'}}>
        <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)', marginBottom:12}}>
          Topic ရွေးပါ (သို့) ကိုယ်ပိုင် topic ထည့်ပါ → AI နဲ့ English conversation လေ့ကျင့်ပါ 🎙️
        </div>

        {/* Preset topics */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, marginBottom:10}}>
          {/* Free Talk tile */}
          <button onClick={() => setTopic('free talk — any topic')}
            style={{padding:'10px 6px', borderRadius:10, border:`1px solid ${topic === 'free talk — any topic' ? 'var(--accent2)' : 'var(--border)'}`, background: topic === 'free talk — any topic' ? 'var(--accent-bg)' : 'var(--card)', cursor:'pointer', textAlign:'center'}}>
            <div style={{fontSize:20, marginBottom:2}}>🗣️</div>
            <div style={{fontSize:11, fontWeight:600, color: topic === 'free talk — any topic' ? 'var(--accent2)' : 'var(--text)'}}>Free Talk</div>
          </button>
          {VOICE_TOPICS.map(t => (
            <button key={t.key} onClick={() => setTopic(t.key)}
              style={{padding:'10px 6px', borderRadius:10, border:`1px solid ${topic === t.key ? 'var(--accent2)' : 'var(--border)'}`, background: topic === t.key ? 'var(--accent-bg)' : 'var(--card)', cursor:'pointer', textAlign:'center'}}>
              <div style={{fontSize:20, marginBottom:2}}>{t.icon}</div>
              <div style={{fontSize:11, fontWeight:600, color: topic === t.key ? 'var(--accent2)' : 'var(--text)'}}>{t.label}</div>
            </button>
          ))}
        </div>

        {/* Custom topic input */}
        <div style={{marginBottom:14}}>
          <input
            className="modal-input"
            style={{fontSize:13, padding:'10px 12px'}}
            placeholder="✏️ Custom topic... (e.g. climate change, my weekend, anime)"
            value={VOICE_TOPICS.some(t => t.key === topic) || topic === 'free talk — any topic' ? '' : topic}
            onChange={e => setTopic(e.target.value)}
            onFocus={() => { if (VOICE_TOPICS.some(t => t.key === topic) || topic === 'free talk — any topic') setTopic(''); }}
          />
        </div>

        {!SR && (
          <div style={{background:'#ff6b6b22', border:'1px solid #ff6b6b44', borderRadius:8, padding:'10px 12px', marginBottom:12, fontSize:12, color:'#ff9090', fontFamily:'var(--font-my)'}}>
            ⚠️ Voice input သည် ဤ browser မှ support မလုပ်ပါ။ Chrome (Android/Desktop) ကို သုံးပါ။
          </div>
        )}
        <button className="btn-primary" onClick={startConversation} disabled={!topic.trim() || !apiKey} style={{width:'100%'}}>
          🎙️ Start Conversation
        </button>
      </div>
    );
  }

  return (
    <div style={{padding:'16px 20px', display:'flex', flexDirection:'column', height:'100%'}}>
      {/* Header */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
        <div style={{fontSize:12, color:'var(--text3)'}}>
          Topic: <span style={{color:'var(--gold)', fontWeight:600}}>{topic}</span>
        </div>
        <div style={{display:'flex', gap:6}}>
          <button onClick={() => setShowMy(v => !v)} className="dir-toggle-btn" style={{fontSize:11, padding:'4px 10px'}}>
            {showMy ? '🙈 MY' : '👁️ MY'}
          </button>
          <button onClick={reset} className="dir-toggle-btn" style={{fontSize:11, padding:'4px 10px'}}>↩ Reset</button>
        </div>
      </div>

      {/* Messages */}
      <div className="voice-messages">
        {messages.map(m => (
          <div key={m.id} className={`vbubble-wrap ${m.role}`}>
            <div className={`vbubble ${m.role}`}>
              <div style={{fontSize:14, lineHeight:1.6}}>{m.text_en}</div>
              {showMy && m.text_my && (
                <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text3)', marginTop:5, paddingTop:5, borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                  {m.text_my}
                </div>
              )}
              {m.role === 'ai' && (
                <button onClick={() => speak(m.text_en)} style={{background:'none', border:'none', cursor:'pointer', fontSize:14, padding:'4px 0 0', color:'var(--text3)', display:'block'}}>🔊</button>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="vbubble-wrap ai">
            <div className="vbubble ai" style={{fontSize:18, letterSpacing:3}}>···</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested replies */}
      {suggestions.length > 0 && !loading && (
        <div style={{marginBottom:12}}>
          <div style={{fontSize:10, color:'var(--text3)', fontWeight:700, textTransform:'uppercase', letterSpacing:1, marginBottom:6}}>💡 You could say:</div>
          <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => { setTranscript(s); sendMessage(s); }}
                style={{padding:'6px 12px', borderRadius:20, border:'1px solid var(--border)', background:'var(--card)', fontSize:12, color:'var(--text)', cursor:'pointer', textAlign:'left'}}>
                "{s}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mic button */}
      <div style={{textAlign:'center', paddingTop:4}}>
        {SR ? (
          <>
            <button onClick={toggleListen} disabled={loading} className={`mic-btn${listening ? ' mic-active' : ''}`}>
              {listening ? '⏹' : '🎤'}
            </button>
            {listening && <div style={{fontSize:11, color:'#e74c3c', marginTop:6, fontFamily:'var(--font-my)'}}>နားထောင်နေသည်... ပြောပါ → ပြီးရင် ထပ်နှိပ်ပါ</div>}
            {transcript && !listening && <div style={{fontSize:12, color:'var(--text3)', marginTop:6, fontStyle:'italic'}}>You: "{transcript}"</div>}
          </>
        ) : (
          <div style={{fontSize:12, color:'var(--text3)', fontFamily:'var(--font-my)'}}>Voice input ကို Chrome browser တွင်သာ အသုံးပြုနိုင်သည်</div>
        )}
      </div>
    </div>
  );
}

/* ── Main PracticeTab ────────────────────────────────────────────── */
export default function PracticeTab({ apiKey }) {
  const [subTab, setSubTab] = useState('reading');
  const TABS = [
    { key: 'reading',      icon: '📄', label: 'Reading' },
    { key: 'writing',      icon: '✏️', label: 'Writing' },
    { key: 'conversation', icon: '💬', label: 'Chat' },
    { key: 'story',        icon: '📚', label: 'Story' },
    { key: 'voice',        icon: '🎙️', label: 'Voice' },
  ];

  return (
    <div className="tab-fade">
      <div className="sub-tab-bar">
        {TABS.map(t => (
          <button key={t.key} className={`sub-tab-btn${subTab === t.key ? ' active' : ''}`} onClick={() => setSubTab(t.key)}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>
      {subTab === 'reading'      && <ReadingSection apiKey={apiKey} />}
      {subTab === 'writing'      && <WritingSection apiKey={apiKey} />}
      {subTab === 'conversation' && <ConversationSection apiKey={apiKey} />}
      {subTab === 'story'        && <StorySection apiKey={apiKey} />}
      {subTab === 'voice'        && <VoiceSection apiKey={apiKey} />}
    </div>
  );
}
