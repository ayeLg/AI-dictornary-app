import { useState, useEffect } from 'react';

export default function OfflineBanner() {
  const [online, setOnline] = useState(() => navigator.onLine);
  useEffect(() => {
    const on  = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, []);
  if (online) return null;
  return <div className="offline-banner">📡 Offline — Search မလုပ်နိုင်သေးပါ (Saved words ကြည့်ရသေးသည်)</div>;
}
