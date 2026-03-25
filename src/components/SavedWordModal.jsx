import { useRef, useState } from 'react';

const POS_COLORS = {
  verb:        { bg: 'rgba(99,102,241,0.15)',  color: '#818cf8' },
  noun:        { bg: 'rgba(245,158,11,0.15)',  color: '#fbbf24' },
  adjective:   { bg: 'rgba(16,185,129,0.15)',  color: '#34d399' },
  adverb:      { bg: 'rgba(249,115,22,0.15)',  color: '#fb923c' },
  phrase:      { bg: 'rgba(236,72,153,0.15)',  color: '#f472b6' },
};
const posStyle = (pos) => POS_COLORS[pos] || { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8' };

const REG_STYLES = {
  formal:   { bg: 'rgba(99,102,241,0.12)', color: '#818cf8' },
  informal: { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24' },
  slang:    { bg: 'rgba(236,72,153,0.12)', color: '#f472b6' },
};

function SynonymsSection({ synonyms, word }) {
  const [expanded, setExpanded] = useState(null);
  const items = synonyms.map(s => typeof s === 'string' ? { word: s } : s);
  return (
    <div style={{display:'flex', flexDirection:'column', gap:8}}>
      {items.map((s, i) => {
        const hasDetail = s.nuance_en || s.use_when;
        const isOpen = expanded === i;
        return (
          <div key={i} className="synonym-card">
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <span className="chip syn" style={{flexShrink:0}}>{s.word}</span>
              {hasDetail && (
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{fontSize:11, color:'var(--text3)', background:'none', border:'none', cursor:'pointer', padding:'2px 6px', borderRadius:6, fontFamily:'var(--font-en)'}}
                >
                  {isOpen ? '▲ less' : `▼ vs "${word}"`}
                </button>
              )}
            </div>
            {isOpen && hasDetail && (
              <div className="synonym-detail">
                {s.nuance_en && (
                  <div style={{marginBottom:6}}>
                    <span style={{fontSize:10, fontWeight:700, color:'var(--text3)', textTransform:'uppercase', letterSpacing:0.5}}>Difference — </span>
                    <span style={{fontSize:13, color:'var(--text2)', fontFamily:'var(--font-en)'}}>{s.nuance_en}</span>
                  </div>
                )}
                {s.nuance_my && (
                  <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text3)', marginBottom:6, lineHeight:1.6}}>{s.nuance_my}</div>
                )}
                {s.use_when && (
                  <div style={{background:'rgba(99,102,241,0.08)', borderLeft:'2px solid var(--accent2)', padding:'6px 10px', borderRadius:'0 6px 6px 0'}}>
                    <span style={{fontSize:10, fontWeight:700, color:'var(--accent2)', textTransform:'uppercase', letterSpacing:0.5}}>Use when — </span>
                    <span style={{fontSize:13, color:'var(--text2)', fontFamily:'var(--font-en)'}}>{s.use_when}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SavedWordModal({ word, onClose, onRemove }) {
  const f = word.word_forms || {};
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const [dragY, setDragY] = useState(0);
  const isDragging = useRef(false);
  const [speaking, setSpeaking] = useState(false);
  const [activePOS, setActivePOS] = useState(0);
  const hasTTS = 'speechSynthesis' in window;

  const hasNewFormat = Array.isArray(word.meanings) && word.meanings.length > 0;
  const activeMeaning = hasNewFormat ? (word.meanings[activePOS] || word.meanings[0]) : null;

  const speak = () => {
    if (!hasTTS) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(word.word);
    utt.lang = 'en-US'; utt.rate = 0.9;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utt);
  };

  const onTouchStart = e => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };
  const onTouchMove = e => {
    if (!isDragging.current) return;
    const dy = e.touches[0].clientY - startY.current;
    if (dy > 0) setDragY(dy);
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    if (dragY > 100) { onClose(); } else { setDragY(0); }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={sheetRef}
        className="modal-sheet"
        style={{
          maxHeight: '85vh',
          overflowY: dragY > 0 ? 'hidden' : 'auto',
          transform: `translateY(${dragY}px)`,
          transition: dragY === 0 ? 'transform 0.3s ease' : 'none',
        }}
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Drag handle */}
        <div className="modal-handle" style={{cursor:'grab'}} />

        {/* Header */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <div style={{fontSize:26, fontWeight:700, color:'var(--text)', fontFamily:'var(--font-title)', letterSpacing:'-0.5px'}}>{word.word}</div>
              {hasTTS && <button className={`tts-btn${speaking ? ' speaking' : ''}`} onClick={speak} title="Pronounce">🔊</button>}
            </div>
            {word.phonetic && (
              <div style={{fontSize:13, color:'var(--text3)', fontFamily:'var(--font-en)', marginTop:3}}>{word.phonetic}</div>
            )}
            {!hasNewFormat && (
              <div style={{display:'flex', gap:5, marginTop:4}}>
                {f.noun      && <span className="form-badge noun">n</span>}
                {f.verb      && <span className="form-badge verb">v</span>}
                {f.adjective && <span className="form-badge adj">adj</span>}
                {f.adverb    && <span className="form-badge adv">adv</span>}
              </div>
            )}
          </div>
          <button onClick={onClose} style={{background:'none', border:'none', color:'var(--text3)', fontSize:20, cursor:'pointer', padding:'4px 8px'}}>✕</button>
        </div>

        {/* ── NEW FORMAT: POS tabs + definitions ── */}
        {hasNewFormat ? (
          <>
            {word.meanings.length > 1 && (
              <div className="pos-tab-row">
                {word.meanings.map((m, i) => {
                  const s = posStyle(m.pos);
                  return (
                    <button key={i} className={`pos-tab${activePOS === i ? ' active' : ''}`}
                      style={activePOS === i ? {background: s.bg, color: s.color, borderColor: s.color + '55'} : {}}
                      onClick={() => setActivePOS(i)}>
                      {m.pos}
                    </button>
                  );
                })}
              </div>
            )}

            {activeMeaning && (
              <div className="info-section" style={{paddingTop:0}}>
                {word.meanings.length === 1 && (() => {
                  const s = posStyle(activeMeaning.pos);
                  return (
                    <div style={{marginBottom:8}}>
                      <span style={{background: s.bg, color: s.color, border:`1px solid ${s.color}55`, padding:'2px 9px', borderRadius:10, fontSize:11, fontWeight:700}}>{activeMeaning.pos}</span>
                    </div>
                  );
                })()}
                <div className="definition-list">
                  {activeMeaning.definitions?.map((def, i) => {
                    const exList = def.examples?.length
                      ? def.examples
                      : def.example_en ? [{ en: def.example_en, my: def.example_my }] : [];
                    const reg = def.register && def.register !== 'neutral' ? def.register : null;
                    const regStyle = REG_STYLES[reg] || null;
                    return (
                      <div key={i} className="def-item">
                        <div className="def-num">{i + 1}</div>
                        <div className="def-body">
                          {reg && regStyle && (
                            <span className="def-register" style={{background: regStyle.bg, color: regStyle.color}}>{reg}</span>
                          )}
                          <div className="def-en">{def.definition_en}</div>
                          <div className="def-my">{def.definition_my}</div>
                          {def.usage_note && def.usage_note !== 'null' && def.usage_note.trim() !== '' && (
                            <div className="def-usage-note">
                              <span className="def-usage-icon">💡</span>
                              <div className="def-usage-en">{def.usage_note}</div>
                            </div>
                          )}
                          {exList.length > 0 && (
                            <div className="def-examples-block">
                              {exList.map((ex, j) => (
                                <div key={j} className="def-example">
                                  <span className="def-example-en">"{ex.en}"</span>
                                  {ex.my && <div className="def-example-my">{ex.my}</div>}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Collocations */}
            {word.collocations?.length > 0 && (
              <div className="info-section">
                <div className="info-label">🔗 Collocations</div>
                <div className="colloc-list">
                  {word.collocations.map((c, i) => (
                    <div key={i} className="colloc-item">
                      <div className="colloc-phrase">{c.collocation}</div>
                      <div className="colloc-my">{c.meaning_my}</div>
                      {c.example_en && <div className="colloc-example">"{c.example_en}"</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Idioms */}
            {word.idioms?.length > 0 && (
              <div className="info-section">
                <div className="info-label">💡 Idioms & Phrases</div>
                <div className="idiom-list">
                  {word.idioms.map((id, i) => (
                    <div key={i} className="idiom-item">
                      <div className="idiom-phrase">"{id.phrase}"</div>
                      <div className="idiom-meaning-en">{id.meaning_en}</div>
                      <div className="idiom-meaning-my">{id.meaning_my}</div>
                      {id.example_en && <div className="colloc-example">e.g. "{id.example_en}"</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* ── OLD FORMAT fallback ── */
          <>
            <div className="info-section">
              <div className="info-label">Meaning</div>
              <div className="meaning-en">{word.english_meaning}</div>
              <div className="meaning-my">{word.myanmar_meaning}</div>
            </div>
            {word.examples?.length > 0 && (
              <div className="info-section">
                <div className="info-label">Examples</div>
                {word.examples.map((ex, i) => (
                  <div key={i} className="example-item">
                    <div className="example-en">"{ex.en}"</div>
                    <div className="example-my">{ex.my}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ── Word Forms (new format) ── */}
        {hasNewFormat && Object.values(f).some(Boolean) && (
          <div className="info-section">
            <div className="info-label">Word Forms</div>
            <div className="forms-grid">
              {f.noun      && <div className="form-item"><div className="form-type noun">Noun</div><div className="form-value">{f.noun}</div></div>}
              {f.verb      && <div className="form-item"><div className="form-type verb">Verb</div><div className="form-value">{f.verb}</div></div>}
              {f.adjective && <div className="form-item"><div className="form-type adj">Adjective</div><div className="form-value">{f.adjective}</div></div>}
              {f.adverb    && <div className="form-item"><div className="form-type adv">Adverb</div><div className="form-value">{f.adverb}</div></div>}
            </div>
          </div>
        )}

        {/* ── Synonyms ── */}
        {word.synonyms?.length > 0 && (
          <div className="info-section">
            <div className="info-label">Synonyms <span style={{fontWeight:400, fontSize:10, color:'var(--text3)', textTransform:'none', letterSpacing:0}}>— nuance ကွဲပြားသော</span></div>
            <SynonymsSection synonyms={word.synonyms} word={word.word} />
          </div>
        )}

        {word.antonyms?.length > 0 && (
          <div className="info-section">
            <div className="info-label">Antonyms</div>
            <div className="chip-row">{word.antonyms.map(a => <span key={a} className="chip ant">{a}</span>)}</div>
          </div>
        )}

        {word.related_words?.length > 0 && (
          <div className="info-section">
            <div className="info-label">Related Words</div>
            <div className="chip-row">{word.related_words.map(r => <span key={r} className="chip rel">{r}</span>)}</div>
          </div>
        )}

        <button className="icon-btn danger" style={{width:'100%', marginTop:12, padding:'10px', borderRadius:10, fontSize:13}}
          onClick={() => { onRemove(word.word); onClose(); }}>
          🗑 Remove from saved
        </button>
      </div>
    </div>
  );
}
