// Lazy-loaded Ornagai dictionary lookup
// Fetches public/ornagai.json once and caches in memory

let cache = null;
let loadPromise = null;

async function load() {
  if (cache) return cache;
  if (loadPromise) return loadPromise;
  loadPromise = fetch(import.meta.env.BASE_URL + 'ornagai.json')
    .then(r => r.json())
    .then(data => { cache = data; return data; });
  return loadPromise;
}

/**
 * Look up a word in the Ornagai dictionary.
 * Returns an array of POS entries: [{p, ph?, d:[]}] or null if not found.
 */
export async function lookupOrnagai(word) {
  const data = await load();
  const key = word.trim().toLowerCase();
  return data[key] || null;
}

/** Preload the dictionary in the background (call on app start). */
export function preloadOrnagai() {
  load().catch(() => {});
}
