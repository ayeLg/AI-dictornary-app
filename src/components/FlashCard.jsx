export default function FlashCard({ word, meaning, isFlipped, onClick }) {
  return (
    <div className="flashcard-scene" onClick={onClick}>
      <div className={`flashcard${isFlipped ? ' flipped' : ''}`}>
        {/* Front — English word */}
        <div className="flashcard-face flashcard-front">
          <div className="flashcard-hint">TAP TO REVEAL</div>
          <div className="flashcard-word">{word}</div>
        </div>
        {/* Back — Myanmar meaning */}
        <div className="flashcard-face flashcard-back">
          <div className="flashcard-hint">MEANING</div>
          <div className="flashcard-meaning">{meaning}</div>
        </div>
      </div>
    </div>
  );
}
