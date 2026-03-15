import { useState, useEffect } from 'react';
import { KEYS, lsGet, lsSet } from '../lib/storage';
import { fetchQuiz } from '../lib/groq';

function isMyanmarText(t) { return /[\u1000-\u109F\uAA60-\uAA7F]/.test(String(t)); }

function QuizIdle({ saved, freqs, onStart, minWords, error }) {
  const canStart  = saved.length >= minWords;
  const numQ      = Math.min(6, saved.length);
  const hasFreqs  = Object.keys(freqs).length > 0;
  const topWord   = hasFreqs
    ? Object.entries(freqs).sort((a,b) => b[1]-a[1])[0]
    : null;

  return (
    <div className="section-wrap tab-fade">
      <span className="quiz-idle-icon">🧠</span>
      <div className="quiz-idle-title">Quiz</div>
      <div className="quiz-idle-desc">
        {canStart ? 'Saved words တွေကို MCQ quiz ဖြင့် စစ်ဆေးမည်' : `Quiz ဖြေဖို့ words ${minWords - saved.length} ခု ထပ်သိမ်းပါ`}
      </div>

      {/* Phase 3: Smart quiz note */}
      {canStart && topWord && (
        <div className="smart-quiz-note">
          🎯 <strong>Smart Quiz:</strong> "{topWord[0]}" ကို {topWord[1]} ကြိမ် search လုပ်ထားသဖြင့် ဒီ word ကို ပိုမေးမည်
        </div>
      )}

      <div className="quiz-stats">
        <div className="quiz-stat">
          <div className="quiz-stat-num">{saved.length}</div>
          <div className="quiz-stat-label">Saved Words</div>
        </div>
        <div className="quiz-stat">
          <div className="quiz-stat-num">{canStart ? numQ : '—'}</div>
          <div className="quiz-stat-label">Questions</div>
        </div>
      </div>

      {error && <div className="error-banner" style={{marginBottom:12}}><span>⚠️ {error}</span></div>}

      <button className="btn-primary" onClick={onStart} disabled={!canStart}>
        {canStart ? '🚀 Quiz စပါမည်' : `Words ${minWords - saved.length} ခု ထပ်လိုသည်`}
      </button>

      {!canStart && (
        <p style={{textAlign:'center', marginTop:12, fontSize:13, color:'var(--text3)'}}>
          Dictionary မှ words {minWords} ခုအထိ Save ပါ
        </p>
      )}
    </div>
  );
}

function QuizLoadingState() {
  return (
    <div className="tab-fade">
      <div style={{textAlign:'center', padding:'36px 20px 20px'}}>
        <div style={{fontSize:48, marginBottom:12}}>⏳</div>
        <div style={{color:'var(--text2)', fontSize:14}}>Smart quiz questions တည်ဆောက်နေသည်...</div>
      </div>
      <div className="skeleton-card">
        <div className="skeleton" style={{height:20, width:'40%', marginBottom:14, borderRadius:20}} />
        <div className="skeleton" style={{height:26, width:'88%', marginBottom:20}} />
        {[1,2,3,4].map(i => <div key={i} className="skeleton" style={{height:46, marginBottom:8, borderRadius:10}} />)}
      </div>
    </div>
  );
}

function QuizQuestion({ question, current, total, selectedOption, answered, onSelect, onNext }) {
  const letters  = ['A','B','C','D'];
  const progress = (current / total) * 100;

  const optClass = (opt) => {
    if (!answered) return '';
    if (opt === question.correct) return 'correct';
    if (opt === selectedOption)   return 'wrong';
    return '';
  };

  return (
    <div>
      <div className="quiz-prog-wrap">
        <div className="quiz-prog-bar">
          <div className="quiz-prog-fill" style={{width:`${progress}%`}} />
        </div>
        <div className="quiz-q-row">
          <span>Question {current + 1} / {total}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="question-card">
        <span className={`q-type-badge ${question.type === 'A' ? 'q-type-a' : 'q-type-b'}`}>
          {question.type === 'A' ? 'English → Myanmar' : 'Myanmar → English'}
        </span>
        <div className={`question-text${isMyanmarText(question.question_text) ? ' my-text' : ''}`}>
          {question.question_text}
        </div>
      </div>

      <div className="options-wrap">
        {(question.options || []).map((opt, i) => (
          <button key={opt} className={`option-btn ${optClass(opt)}`} onClick={() => onSelect(opt)} disabled={answered}>
            <div className="option-letter">{letters[i]}</div>
            <div className={`option-text${isMyanmarText(opt) ? ' my' : ''}`}>{opt}</div>
            {answered && opt === question.correct && <span className="option-marker">✓</span>}
            {answered && opt === selectedOption && opt !== question.correct && <span className="option-marker">✗</span>}
          </button>
        ))}
      </div>

      {answered && question.explanation && (
        <div className="explanation-box">💡 {question.explanation}</div>
      )}

      {answered && (
        <div className="next-btn-wrap">
          <button className="next-btn" onClick={onNext}>
            {current + 1 >= total ? 'ရလဒ်ကြည့်မည် 🎯' : 'နောက်မေးခွန်း →'}
          </button>
        </div>
      )}
    </div>
  );
}

function QuizDone({ answers, onRetry }) {
  const score  = answers.filter(a => a.isCorrect).length;
  const total  = answers.length;
  const pct    = Math.round((score / total) * 100);
  const grade  = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'poor';
  const emoji  = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const title  = pct >= 80 ? 'အလွန်ကောင်းသည်!' : pct >= 60 ? 'ကောင်းသည်!' : 'ဆက်ကြိုးစားပါ!';
  const desc   = pct >= 80 ? 'Words များကို သေချာမှတ်မိနေသည်' : pct >= 60 ? 'Words အများစု သိနေသည်' : 'Words များကို ထပ်မံလေ့လာပါ';
  const wrongs = answers.filter(a => !a.isCorrect);

  return (
    <div className="tab-fade">
      <div className="score-section">
        <div className={`score-circle ${grade}`}>
          <div className="score-num">{score}/{total}</div>
          <div className="score-pct">{pct}%</div>
        </div>
        <div className="score-title">{emoji} {title}</div>
        <div className="score-desc">{desc}</div>
        <div className="score-actions">
          <button className="btn-primary" onClick={onRetry} style={{width:'auto', padding:'10px 28px'}}>
            ထပ်ကြိုးစားမည်
          </button>
        </div>
      </div>

      {wrongs.length > 0 && (
        <div className="wrongs-section">
          <div className="section-label" style={{marginBottom:10}}>မှားသောဖြေချက်များ ({wrongs.length})</div>
          {wrongs.map((a, i) => (
            <div key={i} className="wrong-item">
              <div className="wrong-word">{a.question.word}</div>
              <div className={`wrong-detail red${isMyanmarText(a.selected) ? ' my' : ''}`}>✗ သင်ဖြေ: {a.selected}</div>
              <div className={`wrong-detail green${isMyanmarText(a.correct) ? ' my' : ''}`}>✓ မှန်သော: {a.correct}</div>
              {a.question.explanation && <div className="wrong-explain">{a.question.explanation}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function QuizTab({ apiKey, saved }) {
  const [state, setState]             = useState('idle');
  const [questions, setQuestions]     = useState([]);
  const [currentQ, setCurrentQ]       = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [answered, setAnswered]       = useState(false);
  const [error, setError]             = useState(null);
  const MIN = 4;

  useEffect(() => {
    if (state === 'done' && userAnswers.length > 0) {
      const score = userAnswers.filter(a => a.isCorrect).length;
      const entry = { date: new Date().toISOString(), score, total: userAnswers.length };
      lsSet(KEYS.QUIZ_HIST, [entry, ...lsGet(KEYS.QUIZ_HIST, [])].slice(0, 20));
    }
  }, [state]);

  const startQuiz = async () => {
    setState('loading'); setError(null);
    try {
      const freqs = lsGet(KEYS.FREQ, {});
      const qs    = await fetchQuiz(saved, apiKey, freqs);
      setQuestions(qs); setCurrentQ(0);
      setUserAnswers([]); setSelectedOpt(null); setAnswered(false);
      setState('active');
    } catch (e) { setError(e.message); setState('idle'); }
  };

  const handleSelect = (opt) => {
    if (answered) return;
    setSelectedOpt(opt); setAnswered(true);
    const q = questions[currentQ];
    setUserAnswers(prev => [...prev, { selected: opt, correct: q.correct, isCorrect: opt === q.correct, question: q }]);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) setState('done');
    else { setCurrentQ(n => n + 1); setSelectedOpt(null); setAnswered(false); }
  };

  const freqs = lsGet(KEYS.FREQ, {});
  if (state === 'loading') return <QuizLoadingState />;
  if (state === 'active')  return <QuizQuestion key={currentQ} question={questions[currentQ]} current={currentQ} total={questions.length} selectedOption={selectedOpt} answered={answered} onSelect={handleSelect} onNext={handleNext} />;
  if (state === 'done')    return <QuizDone answers={userAnswers} onRetry={() => setState('idle')} />;
  return <QuizIdle saved={saved} freqs={freqs} onStart={startQuiz} minWords={MIN} error={error} />;
}
