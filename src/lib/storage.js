export const KEYS = {
  API:       'ming_api',
  OR_KEY:    'ming_or_api',
  OR_MODEL:  'ming_or_model',
  HISTORY:   'ming_hist',
  SAVED:     'ming_saved',
  QUIZ_HIST: 'ming_quiz_hist',
  FREQ:      'ming_freq',   // {word: searchCount}
  WOTD:      'ming_wotd',   // {word, wordObj, date}
  SRS:       'ming_srs',    // {word: {interval, nextReview, ease, reps}}
  STREAK:    'ming_streak', // {lastDate: 'YYYY-MM-DD', count: number}
};

export const lsGet = (k, fb = null) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; }
  catch { return fb; }
};

export const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
