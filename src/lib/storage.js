export const KEYS = {
  API:       'ming_api',
  HISTORY:   'ming_hist',
  SAVED:     'ming_saved',
  QUIZ_HIST: 'ming_quiz_hist',
  FREQ:      'ming_freq',   // {word: searchCount}
  WOTD:      'ming_wotd',   // {word, wordObj, date}
};

export const lsGet = (k, fb = null) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; }
  catch { return fb; }
};

export const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
