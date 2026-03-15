export default function WordResult({ result, isSaved, onSave, onChipClick }) {
  const f = result.word_forms || {};
  return (
    <div className="word-card">
      <div className="word-header">
        <div className="word-title">{result.word}</div>
        <div className="word-meta">
          <div className="form-badges">
            {f.noun      && <span className="form-badge noun">n</span>}
            {f.verb      && <span className="form-badge verb">v</span>}
            {f.adjective && <span className="form-badge adj">adj</span>}
            {f.adverb    && <span className="form-badge adv">adv</span>}
          </div>
          <button className={`save-btn${isSaved ? ' saved' : ''}`} onClick={onSave}>
            {isSaved ? '✓ Saved' : '+ Save'}
          </button>
        </div>
      </div>

      <div className="info-section">
        <div className="info-label">Meaning</div>
        <div className="meaning-en">{result.english_meaning}</div>
        <div className="meaning-my">{result.myanmar_meaning}</div>
      </div>

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

      {result.synonyms?.length > 0 && (
        <div className="info-section">
          <div className="info-label">Synonyms</div>
          <div className="chips-row">
            {result.synonyms.map(s => <button key={s} className="chip synonym" onClick={() => onChipClick(s)}>{s}</button>)}
          </div>
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

      {/* Phase 3: Related Words */}
      {result.related_words?.length > 0 && (
        <div className="info-section">
          <div className="info-label">Related Words</div>
          <div className="chips-row">
            {result.related_words.map(w => <button key={w} className="chip related" onClick={() => onChipClick(w)}>{w}</button>)}
          </div>
        </div>
      )}

      {result.examples?.length > 0 && (
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
