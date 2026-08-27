const TTS_URL = 'https://openrouter.ai/api/v1/audio/speech';
const TTS_MODEL = 'google/gemini-3.1-flash-tts-preview';
const TTS_VOICE = 'Kore';
const OR_HEADERS = { 'HTTP-Referer': 'https://ayeLg.github.io', 'X-Title': 'Mingalar Dictionary' };

// Builds the spoken script from data already on the saved word — no extra LLM call needed.
export function buildSpeechScript(wordData) {
  const word = wordData.word || '';
  const meanings = wordData.meanings || [];
  const myanmarText = meanings
    .map(m => {
      const posMy = m.pos_my || m.pos || '';
      const def = m.definitions?.[0]?.definition_my || '';
      return def ? `${posMy}။ ${def}` : '';
    })
    .filter(Boolean)
    .join(' ');

  return myanmarText ? `${word}. ${myanmarText}` : word;
}

function arrayBufferToBase64(buf) {
  let binary = '';
  const bytes = new Uint8Array(buf);
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// Routed through OpenRouter (same key already used for dictionary lookups), not Google directly.
export async function synthesizeSpeech({ text, apiKey }) {
  if (!apiKey) throw new Error('OpenRouter API key မထည့်ရသေးပါ');

  const res = await fetch(TTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`, ...OR_HEADERS },
    body: JSON.stringify({ model: TTS_MODEL, input: text, voice: TTS_VOICE, response_format: 'mp3' }),
  });

  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error?.message || `TTS error (${res.status})`);
  }

  const buf = await res.arrayBuffer();
  return arrayBufferToBase64(buf);
}
