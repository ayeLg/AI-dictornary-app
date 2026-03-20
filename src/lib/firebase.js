import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            "AIzaSyCioLheOGt0TjrvfBQ3kyhGTW72jErfEZg",
  authDomain:        "mingalarpar-dictornary.firebaseapp.com",
  projectId:         "mingalarpar-dictornary",
  storageBucket:     "mingalarpar-dictornary.firebasestorage.app",
  messagingSenderId: "386058403870",
  appId:             "1:386058403870:web:c4e2dce37d4de422d82e0f",
};

const app   = initializeApp(firebaseConfig);
export const fbAuth = getAuth(app);
export const fbDb   = getFirestore(app);

export { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut };

export async function cloudSave(uid, saved, apiKey, srsData) {
  const data = { saved };
  if (apiKey !== undefined) data.apiKey = apiKey;
  if (srsData !== undefined) data.srsData = srsData;
  await setDoc(doc(fbDb, 'users', uid), data, { merge: true });
}

export async function cloudLoad(uid) {
  const snap = await getDoc(doc(fbDb, 'users', uid));
  if (!snap.exists()) return { saved: [], apiKey: null, srsData: {} };
  const d = snap.data();
  return { saved: d.saved || [], apiKey: d.apiKey || null, srsData: d.srsData || {} };
}
