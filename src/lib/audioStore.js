const DB_NAME = 'mingalar-audio';
const STORE = 'clips';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(STORE); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function withStore(mode, fn) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const request = fn(tx.objectStore(STORE));
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

const key = (word) => word.toLowerCase();

export const saveAudio = (word, base64) => withStore('readwrite', store => store.put(base64, key(word)));
export const getAudio = (word) => withStore('readonly', store => store.get(key(word)));
export const deleteAudio = (word) => withStore('readwrite', store => store.delete(key(word)));
export const getAllAudioWords = () => withStore('readonly', store => store.getAllKeys());
