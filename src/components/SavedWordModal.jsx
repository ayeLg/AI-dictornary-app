import { useRef, useState } from 'react';

export default function SavedWordModal({ word, onClose, onRemove }) {
  const f = word.word_forms || {};
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const [dragY, setDragY] = useState(0);
  const isDragging = useRef(false);
  const [speaking, setSpeaking] = useState(false);
  const hasTTS = 'speechSynthesis' in window;

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
    if (dy > 0) setDragY(dy); // only allow dragging down
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    if (dragY > 100) {
      onClose(); // swipe down >100px → close
    } else {
      setDragY(0); // snap back
    }
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

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
            <div style={{fontSize:26, fontWeight:700, color:'var(--text)', fontFamily:'var(--font-title)', letterSpacing:'-0.5px'}}>{word.word}</div>
            {hasTTS && <button className={`tts-btn${speaking ? ' speaking' : ''}`} onClick={speak} title="Pronounce">🔊</button>}
          </div>
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
