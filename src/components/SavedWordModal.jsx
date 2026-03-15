export default function SavedWordModal({ word, onClose, onRemove }) {
  const f = word.word_forms || {};
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" style={{maxHeight:'85vh', overflowY:'auto'}} onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14}}>
          <div>
            <div style={{fontSize:26, fontWeight:700, color:'var(--text)', fontFamily:'var(--font-title)', letterSpacing:'-0.5px'}}>{word.word}</div>
            <div style={{display:'flex', gap:5, marginTop:4}}>
              {f.noun      && <span className="form-badge noun">n</span>}
              {f.verb      && <span className="form-badge verb">v</span>}
              {f.adjective && <span className="form-badge adj">adj</span>}
              {f.adverb    && <span className="form-badge adv">adv</span>}
            </div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',color:'var(--text3)',fontSize:20,cursor:'pointer',padding:'4px 8px'}}>✕</button>
        </div>

        <div className="info-section">
          <div className="info-label">Meaning</div>
          <div className="meaning-en">{word.english_meaning}</div>
          <div className="meaning-my">{word.myanmar_meaning}</div>
        </div>

        {word.synonyms?.length > 0 && (
          <div className="info-section">
            <div className="info-label">Synonyms</div>
            <div className="chip-row">{word.synonyms.map(s => <span key={s} className="chip syn">{s}</span>)}</div>
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

        <button className="icon-btn danger" style={{width:'100%', marginTop:12, padding:'10px', borderRadius:10, fontSize:13}}
          onClick={() => { onRemove(word.word); onClose(); }}>
          🗑 Remove from saved
        </button>
      </div>
    </div>
  );
}
