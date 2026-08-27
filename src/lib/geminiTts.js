const TTS_URL = 'https://openrouter.ai/api/v1/audio/speech';
const TTS_MODEL = 'google/gemini-3.1-flash-tts-preview';
const TTS_VOICE = 'Kore';
const OR_HEADERS = { 'HTTP-Referer': 'https://ayeLg.github.io', 'X-Title': 'Mingalar Dictionary' };
const PCM_SAMPLE_RATE = 24000; // Gemini TTS output: 24kHz / 16-bit / mono

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

function bytesToBase64(bytes) {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// Gemini TTS returns headerless PCM — wrap it in a WAV header so <audio> can play it.
export function pcmToWavBase64(pcmBytes, { sampleRate = PCM_SAMPLE_RATE, channels = 1, bitsPerSample = 16 } = {}) {
  const byteRate = sampleRate * channels * bitsPerSample / 8;
  const blockAlign = channels * bitsPerSample / 8;
  const dataSize = pcmBytes.length;

  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const writeStr = (offset, str) => { for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i)); };

  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeStr(36, 'data');
  view.setUint32(40, dataSize, true);
  new Uint8Array(buffer, 44).set(pcmBytes);

  return bytesToBase64(new Uint8Array(buffer));
}

// Routed through OpenRouter (same key already used for dictionary lookups), not Google directly.
export async function synthesizeSpeech({ text, apiKey }) {
  if (!apiKey) throw new Error('OpenRouter API key မထည့်ရသေးပါ');

  const res = await fetch(TTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`, ...OR_HEADERS },
    body: JSON.stringify({ model: TTS_MODEL, input: text, voice: TTS_VOICE, response_format: 'pcm' }),
  });

  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error?.message || `TTS error (${res.status})`);
  }

  const buf = await res.arrayBuffer();
  return pcmToWavBase64(new Uint8Array(buf));
}
