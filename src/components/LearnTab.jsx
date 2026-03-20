import { useState, useMemo } from 'react';
import FlashCard from './FlashCard';

const TODAY = () => new Date().toISOString().slice(0, 10);

function getMasteryLevel(srs) {
  if (!srs || srs.reps === 0) return 'New';
  if (srs.reps <= 2) return 'Learning';
  if (srs.reps >= 5 && srs.interval > 14) return 'Mastered';
  return 'Familiar';
}

export function getLearnDueCount(saved, srsData) {
  if (!saved?.length) return 0;
  return saved.filter(w => {
    const s = srsData[w.word];
    if (!s) return true;
    return new Date(s.nextReview) <= new Date();
  }).length;
}

function applyAnswer(srs, easy) {
  const today = TODAY();
  if (!srs) srs = { interval: 1, ease: 2.5, reps: 0, nextReview: today };
  if (easy) {
    const newInterval = Math.max(1, Math.floor(srs.interval * srs.ease));
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);
    return {
      interval: newInterval,
      ease: Math.min(2.5, srs.ease + 0.1),
      reps: srs.reps + 1,
      nextReview: nextDate.toISOString().slice(0, 10),
    };
  } else {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    return {
      interval: 1,
      ease: Math.max(1.3, srs.ease - 0.2),
      reps: 0,
      nextReview: nextDate.toISOString().slice(0, 10),
    };
  }
}

export default function LearnTab({ saved, srsData, onSrsUpdate }) {
  const [view, setView] = useState('idle'); // idle | session | done
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [stats, setStats] = useState({ known: 0, again: 0 });

  const dueCards = useMemo(() =>
    saved.filter(w => {
      const s = srsData[w.word];
      if (!s) return true;
      return new Date(s.nextReview) <= new Date();
    }), [saved, srsData]);

  const breakdown = useMemo(() => {
    const b = { New: 0, Learning: 0, Familiar: 0, Mastered: 0 };
    saved.forEach(w => b[getMasteryLevel(srsData[w.word])]++);
    return b;
  }, [saved, srsData]);

  const startSession = () => {
    setDeck([...dueCards]);
    setIdx(0);
    setIsFlipped(false);
    setHasFlipped(false);
    setStats({ known: 0, again: 0 });
    setView('session');
  };

  const handleFlip = () => {
    setIsFlipped(f => !f);
    setHasFlipped(true);
  };

  const handleAnswer = (easy) => {
    const card = deck[idx];
    const updated = { ...srsData, [card.word]: applyAnswer(srsData[card.word], easy) };
    onSrsUpdate(updated);
    setStats(s => ({ ...s, known: s.known + (easy ? 1 : 0), again: s.again + (easy ? 0 : 1) }));
    const next = idx + 1;
    if (next >= deck.length) {
      setView('done');
    } else {
      setIdx(next);
      setIsFlipped(false);
      setHasFlipped(false);
    }
  };

  const masteryColors = { New: 'var(--text3)', Learning: 'var(--gold)', Familiar: 'var(--accent2)', Mastered: 'var(--green)' };

  if (view === 'done') return (
    <div className="tab-fade" style={{padding:'32px 20px', textAlign:'center'}}>
      <div style={{fontSize:48, marginBottom:12}}>🎉</div>
      <div style={{fontFamily:'var(--font-title)', fontSize:28, color:'var(--text)', marginBottom:8}}>Session Complete!</div>
      <div style={{fontFamily:'var(--font-my)', fontSize:15, color:'var(--text2)', marginBottom:24}}>
        ဒီနေ့ review ပြီးပါပြီ
      </div>
      <div style={{display:'flex', gap:12, justifyContent:'center', marginBottom:28}}>
        <div style={{background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:12, padding:'12px 20px', textAlign:'center'}}>
          <div style={{fontSize:28, fontWeight:700, color:'var(--green)'}}>{stats.known}</div>
          <div style={{fontSize:11, color:'var(--text3)', fontWeight:700, textTransform:'uppercase', letterSpacing:1}}>Known</div>
        </div>
        <div style={{background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.3)', borderRadius:12, padding:'12px 20px', textAlign:'center'}}>
          <div style={{fontSize:28, fontWeight:700, color:'var(--gold)'}}>{stats.again}</div>
          <div style={{fontSize:11, color:'var(--text3)', fontWeight:700, textTransform:'uppercase', letterSpacing:1}}>Review Again</div>
        </div>
      </div>
      <button className="btn-primary" onClick={() => setView('idle')}>Back to Learn</button>
    </div>
  );

  if (view === 'session') {
    const card = deck[idx];
    return (
      <div className="tab-fade">
        <div style={{padding:'14px 20px 0'}}>
          <div className="card-counter">Card {idx + 1} / {deck.length}</div>
          <div style={{height:4, background:'var(--border)', borderRadius:2, overflow:'hidden'}}>
            <div style={{height:'100%', width:`${((idx + 1) / deck.length) * 100}%`, background:'var(--accent)', borderRadius:2, transition:'width 0.3s'}} />
          </div>
        </div>
        <div style={{padding:'0 20px'}}>
          <FlashCard
            word={card.word}
            meaning={card.myanmar_meaning || card.english_meaning}
            isFlipped={isFlipped}
            onClick={handleFlip}
          />
        </div>
        {!hasFlipped ? (
          <div style={{padding:'0 20px'}}>
            <button className="learn-btn-reveal" onClick={handleFlip}>Reveal meaning →</button>
          </div>
        ) : (
          <div className="learn-btn-row">
            <button className="learn-btn-again" onClick={() => handleAnswer(false)}>↺ Again</button>
            <button className="learn-btn-know" onClick={() => handleAnswer(true)}>✓ Know it</button>
          </div>
        )}
        {card.english_meaning && isFlipped && (
          <div style={{margin:'0 20px', padding:'10px 14px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:10}}>
            <div style={{fontSize:11, color:'var(--text3)', fontWeight:700, textTransform:'uppercase', letterSpacing:1, marginBottom:4}}>English</div>
            <div style={{fontSize:13, color:'var(--text2)'}}>{card.english_meaning}</div>
          </div>
        )}
      </div>
    );
  }

  // Idle view
  return (
    <div className="tab-fade" style={{padding:'20px'}}>
      <div style={{textAlign:'center', marginBottom:20}}>
        <div style={{fontSize:32, marginBottom:6}}>🎴</div>
        <div style={{fontFamily:'var(--font-title)', fontSize:24, color:'var(--text)', marginBottom:4}}>Flashcard Review</div>
        <div style={{fontFamily:'var(--font-my)', fontSize:13, color:'var(--text2)'}}>
          Spaced Repetition နဲ့ words တွေ မှတ်ထားပါ
        </div>
      </div>

      {/* Mastery breakdown */}
      <div className="mastery-grid">
        {Object.entries(breakdown).map(([level, count]) => (
          <div key={level} className="mastery-chip">
            <div className="mastery-num" style={{color: masteryColors[level]}}>{count}</div>
            <div className="mastery-label">{level}</div>
          </div>
        ))}
      </div>

      {/* Due today */}
      <div style={{background:'var(--card)', border:'1px solid var(--border)', borderRadius:12, padding:'16px', marginBottom:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <div style={{fontSize:13, fontWeight:700, color:'var(--text)'}}>Due today</div>
          <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text3)', marginTop:2}}>ယနေ့ review လုပ်ရမည့် words</div>
        </div>
        <div style={{fontFamily:'var(--font-title)', fontSize:32, color: dueCards.length > 0 ? 'var(--accent)' : 'var(--text3)', fontWeight:700}}>
          {dueCards.length}
        </div>
      </div>

      {saved.length === 0 ? (
        <div style={{textAlign:'center', padding:'32px 0', color:'var(--text3)'}}>
          <div style={{fontSize:32, marginBottom:8}}>📚</div>
          <div style={{fontFamily:'var(--font-my)', fontSize:14}}>Dictionary မှာ words တွေ save လုပ်ပြီးမှ ပြန်လာပါ</div>
        </div>
      ) : dueCards.length === 0 ? (
        <div style={{textAlign:'center', padding:'24px', background:'rgba(16,185,129,0.05)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:12, marginBottom:16}}>
          <div style={{fontSize:24, marginBottom:6}}>✅</div>
          <div style={{fontSize:14, fontWeight:700, color:'var(--green)'}}>All caught up!</div>
          <div style={{fontFamily:'var(--font-my)', fontSize:12, color:'var(--text3)', marginTop:4}}>ဒီနေ့ review ပြီးပြီ။ မနက်ဖြန် ပြန်လာပါ။</div>
        </div>
      ) : (
        <button className="btn-primary" onClick={startSession}>
          🎴 Start Review ({dueCards.length} cards)
        </button>
      )}
    </div>
  );
}
