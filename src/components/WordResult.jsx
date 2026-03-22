import { useState } from 'react';

// Synonyms with nuance — handles both old string[] and new object[] format
function SynonymsSection({ synonyms, onChipClick, mainWord }) {
  const [expanded, setExpanded] = useState(null);

  // Normalize: could be string or object
  const items = synonyms.map(s => typeof s === 'string' ? { word: s } : s);

  return (
    <div style={{display:'flex', flexDirection:'column', gap:8}}>
      {items.map((s, i) => {
        const hasDetail = s.nuance_en || s.use_when;
        const isOpen = expanded === i;
        return (
          <div key={i} className="synonym-card">
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <button className="chip synonym" onClick={() => onChipClick(s.word)} style={{flexShrink:0}}>{s.word}</button>
              {hasDetail && (
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{fontSize:11, color:'var(--text3)', background:'none', border:'none', cursor:'pointer', padding:'2px 6px', borderRadius:6, fontFamily:'var(--font-en)'}}
                >
                  {isOpen ? '▲ less' : '▼ vs "' + mainWord + '"'}
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

const POS_COLORS = {
  verb:        { bg: 'rgba(99,102,241,0.15)',  color: '#818cf8', label: 'verb' },
  noun:        { bg: 'rgba(245,158,11,0.15)',  color: '#fbbf24', label: 'noun' },
  adjective:   { bg: 'rgba(16,185,129,0.15)',  color: '#34d399', label: 'adj' },
  adverb:      { bg: 'rgba(249,115,22,0.15)',  color: '#fb923c', label: 'adv' },
  phrase:      { bg: 'rgba(236,72,153,0.15)',  color: '#f472b6', label: 'phr' },
};
const posStyle = (pos) => POS_COLORS[pos] || { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8', label: pos };

export default function WordResult({ result, isSaved, onSave, onChipClick }) {
  const f = result.word_forms || {};
  const [speaking, setSpeaking] = useState(false);
  const [activePOS, setActivePOS] = useState(0);
  const hasTTS = 'speechSynthesis' in window;

  // New format: meanings[] array; Old format fallback
  const hasNewFormat = Array.isArray(result.meanings) && result.meanings.length > 0;
  const activeMeaning = hasNewFormat ? (result.meanings[activePOS] || result.meanings[0]) : null;

  const speak = () => {
    if (!hasTTS) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(result.word);
    utt.lang = 'en-US'; utt.rate = 0.85;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utt);
  };

  return (
    <div className="word-card">
      {/* ── Header ── */}
      <div className="word-header">
        {/* Left: word + phonetic */}
        <div style={{flex:1, minWidth:0}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <div className="word-title">{result.word}</div>
            {hasTTS && (
              <button className={`tts-btn${speaking ? ' speaking' : ''}`} onClick={speak} title="Pronounce">🔊</button>
            )}
          </div>
          {result.phonetic && (
            <div style={{fontSize:13, color:'var(--text3)', fontFamily:'var(--font-en)', marginTop:4}}>{result.phonetic}</div>
          )}
          {result.corrected_word && (
            <div style={{fontSize:12, color:'var(--gold)', marginTop:4}}>
              ✏️ Did you mean: <strong>{result.corrected_word}</strong>?
            </div>
          )}
        </div>
        {/* Right: save button */}
        <button className={`save-btn${isSaved ? ' saved' : ''}`} onClick={onSave} style={{flexShrink:0, alignSelf:'flex-start', marginTop:6}}>
          {isSaved ? '✓ Saved' : '+ Save'}
        </button>
      </div>

      {/* ── NEW FORMAT: POS tabs + definitions ── */}
      {hasNewFormat ? (
        <>
          {/* POS selector tabs */}
          {result.meanings.length > 1 && (
            <div className="pos-tab-row">
              {result.meanings.map((m, i) => {
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

          {/* Single POS meaning block */}
          {activeMeaning && (
            <div className="info-section" style={{paddingTop:0}}>
              {/* POS badge when only 1 POS */}
              {result.meanings.length === 1 && (
                <div style={{marginBottom:8}}>
                  {(() => { const s = posStyle(activeMeaning.pos); return (
                    <span style={{background: s.bg, color: s.color, border:`1px solid ${s.color}55`, padding:'2px 9px', borderRadius:10, fontSize:11, fontWeight:700}}>{activeMeaning.pos}</span>
                  ); })()}
                </div>
              )}
              <div className="definition-list">
                {activeMeaning.definitions?.map((def, i) => {
                  const exList = def.examples?.length
                    ? def.examples
                    : def.example_en
                      ? [{ en: def.example_en, my: def.example_my }]
                      : [];
                  const reg = def.register && def.register !== 'neutral' ? def.register : null;
                  const regStyle = {
                    formal:   { bg: 'rgba(99,102,241,0.12)', color: '#818cf8' },
                    informal: { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24' },
                    slang:    { bg: 'rgba(236,72,153,0.12)', color: '#f472b6' },
                  }[reg] || null;

                  return (
                    <div key={i} className="def-item">
                      <div className="def-num">{i + 1}</div>
                      <div className="def-body">
                        {/* Register badge */}
                        {reg && regStyle && (
                          <span className="def-register" style={{background: regStyle.bg, color: regStyle.color}}>
                            {reg}
                          </span>
                        )}
                        <div className="def-en">{def.definition_en}</div>
                        <div className="def-my">{def.definition_my}</div>

                        {/* Usage note */}
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

          {/* ── Collocations ── */}
          {result.collocations?.length > 0 && (
            <div className="info-section">
              <div className="info-label">🔗 Collocations <span style={{fontSize:10, fontWeight:400, color:'var(--text3)'}}>(တွဲသုံးသောအခါ အဓိပ္ပာယ်ပြောင်း)</span></div>
              <div className="colloc-list">
                {result.collocations.map((c, i) => (
                  <div key={i} className="colloc-item">
                    <div className="colloc-phrase"
                      onClick={() => onChipClick(c.collocation)}
                      title="Search this collocation">
                      {c.collocation}
                    </div>
                    <div className="colloc-my">{c.meaning_my}</div>
                    {c.example_en && <div className="colloc-example">"{c.example_en}"</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Idioms ── */}
          {result.idioms?.length > 0 && (
            <div className="info-section">
              <div className="info-label">💡 Idioms & Phrases <span style={{fontSize:10, fontWeight:400, color:'var(--text3)'}}>(မူလ အဓိပ္ပာယ်မဟုတ်)</span></div>
              <div className="idiom-list">
                {result.idioms.map((id, i) => (
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
        <div className="info-section">
          <div className="info-label">Meaning</div>
          <div className="meaning-en">{result.english_meaning}</div>
          <div className="meaning-my">{result.myanmar_meaning}</div>
        </div>
      )}

      {/* ── Word Forms ── */}
      {Object.values(f).some(Boolean) && (
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
      {result.synonyms?.length > 0 && (
        <div className="info-section">
          <div className="info-label">Synonyms <span style={{fontWeight:400, fontSize:10, color:'var(--text3)', textTransform:'none', letterSpacing:0}}>— အဓိပ္ပာယ်တူ၊ သို့သော် ကွဲပြားသော nuance</span></div>
          <SynonymsSection synonyms={result.synonyms} onChipClick={onChipClick} mainWord={result.word} />
        </div>
      )}
      {result.antonyms?.length > 0 && (
        <div className="info-section">
          <div className="info-label">Antonyms</div>
          <div className="chips-row">
            {result.antonyms.map(a => <button key={a} className="chip antonym" onClick={() => onChipClick(a)}>{a}</button>)}
          </div>
        </div>
      )}
      {result.related_words?.length > 0 && (
        <div className="info-section">
          <div className="info-label">Related Words</div>
          <div className="chips-row">
            {result.related_words.map(w => <button key={w} className="chip related" onClick={() => onChipClick(w)}>{w}</button>)}
          </div>
        </div>
      )}

      {/* ── Old format examples ── */}
      {!hasNewFormat && result.examples?.length > 0 && (
        <div className="info-section">
          <div className="info-label">Examples</div>
          {result.examples.map((ex, i) => (
            <div key={i} className="example-item">
              <div className="example-en">"{ex.en}"</div>
              <div className="example-my">{ex.my}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
