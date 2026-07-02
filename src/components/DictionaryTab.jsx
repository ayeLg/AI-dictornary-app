import { useState, useEffect, useCallback, useRef } from 'react';
import { KEYS, lsGet, lsSet } from '../lib/storage';
import { fetchWord, getLastUsedAPI } from '../lib/groq';
import { lookupOrnagai } from '../lib/ornagai';
import WordResult from './WordResult';

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton" style={{height:36, width:'55%', marginBottom:12}} />
      <div className="skeleton" style={{height:13, width:'35%', marginBottom:20}} />
      <div className="skeleton" style={{height:14, width:'100%', marginBottom:8}} />
      <div className="skeleton" style={{height:14, width:'88%', marginBottom:8}} />
      <div className="skeleton" style={{height:14, width:'75%', marginBottom:18}} />
      <div style={{display:'flex', gap:8}}>
        {[72,88,64].map(w => <div key={w} className="skeleton" style={{height:28, width:w, borderRadius:20}} />)}
      </div>
    </div>
  );
}

function getWordOfDay(saved) {
  if (!saved.length) return null;
  const today  = new Date().toDateString();
  const stored = lsGet(KEYS.WOTD, null);
  if (stored && stored.date === today && saved.some(w => w.word === stored.word)) return stored;
  const picked = saved[Math.floor(Math.random() * saved.length)];
  const wotd   = { word: picked.word, wordObj: picked, date: today };
  lsSet(KEYS.WOTD, wotd);
  return wotd;
}

function WordOfDay({ saved, onSearch }) {
  const wotd = getWordOfDay(saved);
  if (!wotd) return null;
  return (
    <div className="wotd-card" onClick={() => onSearch(wotd.word)}>
      <div className="wotd-label">✨ Word of the Day</div>
      <div className="wotd-word">{wotd.word}</div>
      <div className="wotd-meaning">{wotd.wordObj?.myanmar_meaning || ''}</div>
      <div className="wotd-tap">Search မည် →</div>
    </div>
  );
}

const apiBadgeStyles = {
  groq: {
    bg: 'rgba(99,102,241,0.12)',
    color: '#818cf8',
    border: '1px solid #818cf844',
    label: '⚡ Groq AI'
  },
  openrouter: {
    bg: 'rgba(16,185,129,0.12)',
    color: '#34d399',
    border: '1px solid #34d39944',
    label: '🔀 OpenRouter AI'
  },
  cache: {
    bg: 'rgba(59,130,246,0.12)',
    color: '#3b82f6',
    border: '1px solid #3b82f644',
    label: '💾 Cached'
  },
  ornagai_preview: {
    bg: 'rgba(139,92,246,0.12)',
    color: '#a78bfa',
    border: '1px solid #a78bfa44',
    label: '📖 Local Preview'
  },
  offline: {
    bg: 'rgba(107,114,128,0.12)',
    color: '#9ca3af',
    border: '1px solid #9ca3af44',
    label: '📴 Offline Local'
  },
  saved: {
    bg: 'rgba(245,158,11,0.12)',
    color: '#fbbf24',
    border: '1px solid #fbbf2444',
    label: '💾 Saved'
  }
};


export default function DictionaryTab({ apiKey, saved, onSaveToggle, pendingSearch, onPendingClear }) {
  const [query, setQuery]         = useState('');
  const [searchedQ, setSearchedQ] = useState('');
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [usedAPI, setUsedAPI]     = useState(null);
  const [history, setHistory]     = useState(() => lsGet(KEYS.HISTORY, []));
  const [aiGenerating, setAiGenerating] = useState(false);
  const searchIdRef               = useRef(0);
  // Phase 3: autocomplete state
  const [sugg, setSugg]           = useState([]);
  const [showSugg, setShowSugg]   = useState(false);
  const blurTimer                 = useRef(null);

  const doSearch = useCallback(async (word) => {
    const w = word.trim();
    if (!w) return;

    // Helper to update search stats
    const updateStats = (finalWord) => {
      const freq = lsGet(KEYS.FREQ, {});
      freq[finalWord] = (freq[finalWord] || 0) + 1;
      lsSet(KEYS.FREQ, freq);

      setHistory(prev => {
        const next = [w, ...prev.filter(h => h.toLowerCase() !== w.toLowerCase())].slice(0, 10);
        lsSet(KEYS.HISTORY, next);
        return next;
      });
    };

    searchIdRef.current += 1;
    const currentSearchId = searchIdRef.current;

    setQuery(w); setSearchedQ(w);
    setShowSugg(false); setSugg([]);
    setLoading(true); setError(null); setResult(null);
    setAiGenerating(false);

    try {
      // 1. Check if bookmarked/saved
      const savedWord = (saved || []).find(s => s.word?.toLowerCase() === w.toLowerCase());
      if (savedWord) {
        if (currentSearchId !== searchIdRef.current) return;
        setResult(savedWord);
        setUsedAPI('saved');
        setLoading(false);
        updateStats(savedWord.word);
        return;
      }

      // 2. Check local search cache (ming_cache)
      const cache = lsGet('ming_cache', {});
      const cachedWord = cache[w.toLowerCase()];
      if (cachedWord) {
        if (currentSearchId !== searchIdRef.current) return;
        setResult(cachedWord);
        setUsedAPI('cache');
        setLoading(false);
        updateStats(cachedWord.word);
        return;
      }

      // 3. Perform local Ornagai lookup for instant preview
      let localPreview = null;
      try {
        const ornagaiData = await lookupOrnagai(w);
        if (ornagaiData && currentSearchId === searchIdRef.current) {
          localPreview = {
            word: w,
            phonetic: ornagaiData[0]?.ph || null,
            english_meaning: ornagaiData[0]?.d?.[0] || '',
            myanmar_meaning: ornagaiData[0]?.d?.[0] || '',
            meanings: ornagaiData.map(entry => ({
              pos: entry.p,
              definitions: entry.d.map(def => ({
                definition_en: '',
                definition_my: def,
                examples: []
              }))
            }))
          };
          setResult(localPreview);
          setUsedAPI('ornagai_preview');
          setLoading(false);
          setAiGenerating(true);
        }
      } catch (err) {
        console.warn('Ornagai preview lookup failed:', err);
      }

      // 4. Call AI API in background
      try {
        const finalResult = await fetchWord(w, apiKey);
        if (currentSearchId !== searchIdRef.current) return;

        setResult(finalResult);
        setUsedAPI(getLastUsedAPI());
        setAiGenerating(false);
        setLoading(false);

        // Save successfully fetched result to local search cache
        const updatedCache = lsGet('ming_cache', {});
        updatedCache[finalResult.word?.toLowerCase() || w.toLowerCase()] = finalResult;
        lsSet('ming_cache', updatedCache);

        updateStats(finalResult.word || w);
      } catch (apiErr) {
        if (currentSearchId !== searchIdRef.current) return;

        if (localPreview) {
          // If we have a local preview, keep showing it, just stop generating status
          setAiGenerating(false);
          setUsedAPI('offline');
        } else {
          setError(apiErr.message);
          setLoading(false);
        }
      }
    } catch (e) {
      if (currentSearchId !== searchIdRef.current) return;
      setError(e.message);
      setLoading(false);
    }
  }, [apiKey, saved]);

  // Handle tap from Profile history chips
  useEffect(() => {
    if (pendingSearch) {
      doSearch(pendingSearch);
      onPendingClear();
    }
  }, [pendingSearch, doSearch, onPendingClear]);

  // Phase 3: build autocomplete suggestions
  const buildSugg = (val) => {
    if (val.length < 2) { setSugg([]); setShowSugg(false); return; }
    const q = val.toLowerCase();
    const fromSaved   = saved.filter(w => w.word.toLowerCase().includes(q)).map(w => ({ text: w.word, icon: '🔖' }));
    const fromHistory = history.filter(h => h.toLowerCase().includes(q) && !fromSaved.find(s => s.text.toLowerCase() === h.toLowerCase())).map(h => ({ text: h, icon: '🕐' }));
    const list = [...fromSaved, ...fromHistory].slice(0, 6);
    setSugg(list);
    setShowSugg(list.length > 0);
  };

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    buildSugg(val);
  };

  const isSaved  = result && saved.some(s => s.word?.toLowerCase() === result.word?.toLowerCase());
  const showTypo = result && result.word && searchedQ.toLowerCase() !== result.word.toLowerCase();
  const showWotD = !result && !loading && !error && saved.length > 0;

  return (
    <div className="tab-fade">
      {/* Search bar */}
      <div className="search-container">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            className="search-input" type="text" autoComplete="off" autoCorrect="off" spellCheck="false"
            placeholder="Search English word or phrase..."
            value={query}
            onChange={handleQueryChange}
            onKeyDown={e => e.key === 'Enter' && doSearch(query)}
            onFocus={() => query.length >= 2 && setShowSugg(sugg.length > 0)}
            onBlur={() => { blurTimer.current = setTimeout(() => setShowSugg(false), 160); }}
          />
          {query.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => { setQuery(''); setResult(null); setError(null); setSugg([]); setShowSugg(false); }}
              tabIndex={-1}
            >✕</button>
          )}
          <button className="search-btn" onClick={() => doSearch(query)}>Search</button>

          {/* Phase 3: Autocomplete dropdown */}
          {showSugg && (
            <div className="autocomplete-drop">
              {sugg.map((s, i) => (
                <div key={i} className="autocomplete-item" onMouseDown={() => { clearTimeout(blurTimer.current); doSearch(s.text); }}>
                  <span className="autocomplete-icon">{s.icon}</span>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Phase 3: Word of the Day */}
      {showWotD && <WordOfDay saved={saved} onSearch={doSearch} />}

      {/* Recent searches */}
      {!result && !loading && history.length > 0 && (
        <div className="history-section">
          <div className="section-label">Recent</div>
          <div className="history-chips">
            {history.map(h => <button key={h} className="history-chip" onClick={() => doSearch(h)}>{h}</button>)}
          </div>
        </div>
      )}

      {showTypo && (
        <div className="typo-banner">
          <span>💡 Showing results for</span>
          <span className="typo-suggest" onClick={() => doSearch(result.word)}>{result.word}</span>
          <span>(corrected from &ldquo;{searchedQ}&rdquo;)</span>
        </div>
      )}

      {loading && <SkeletonCard />}

      {/* Phase 3: Error with retry button */}
      {error && (
        <div className="error-banner">
          <span>⚠️ {error}</span>
          <button className="retry-btn" onClick={() => doSearch(searchedQ)}>Retry</button>
        </div>
      )}

      {aiGenerating && (
        <div className="ai-generating-banner">
          <span className="spinner-icon">✨</span>
          <span>AI is analyzing word nuance, collocations, and idioms...</span>
        </div>
      )}

      {result && !loading && (
        <>
          {usedAPI && (() => {
            const badge = apiBadgeStyles[usedAPI] || apiBadgeStyles.saved;
            return (
              <div style={{ textAlign: 'right', marginBottom: 4, paddingRight: 18 }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: 10, fontWeight: 600, letterSpacing: 0.5,
                  padding: '3px 8px', borderRadius: 20,
                  background: badge.bg,
                  color: badge.color,
                  border: badge.border,
                }}>
                  {badge.label}
                </span>
              </div>
            );
          })()}
          <WordResult
            result={result} isSaved={isSaved}
            onSave={() => onSaveToggle(result)} onChipClick={doSearch}
            onWordUpdate={(updated) => {
              setResult(updated);
              const cache = lsGet('ming_cache', {});
              cache[updated.word?.toLowerCase()] = updated;
              lsSet('ming_cache', cache);
              onSaveToggle(updated, true);
            }}
          />
        </>
      )}

      {!result && !loading && !error && history.length === 0 && !saved.length && (
        <div className="empty-state">
          <div className="empty-state-icon">📚</div>
          <div>Search any English word to see its<br />meaning in Myanmar</div>
        </div>
      )}
    </div>
  );
}
