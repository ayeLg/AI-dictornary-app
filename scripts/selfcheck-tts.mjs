import assert from 'node:assert';
import { buildSpeechScript, pcmToWavBase64 } from '../src/lib/geminiTts.js';

const sample = {
  word: 'run',
  meanings: [
    { pos: 'verb', pos_my: 'ကြိယာ', definitions: [{ definition_my: 'ပြေးသည်' }] },
    { pos: 'noun', pos_my: 'နာမ်', definitions: [{ definition_my: 'ပြေးခြင်း' }] },
  ],
};

const script = buildSpeechScript(sample);
assert.ok(script.startsWith('run.'), 'must lead with the word');
assert.ok(script.includes('ကြိယာ') && script.includes('ပြေးသည်'), 'must include verb meaning');
assert.ok(script.includes('နာမ်') && script.includes('ပြေးခြင်း'), 'must include noun meaning');

const noMeanings = buildSpeechScript({ word: 'test', meanings: [] });
assert.strictEqual(noMeanings, 'test', 'must fall back to just the word with no meanings');

// pcmToWavBase64: wrap a tiny fake PCM buffer and check the WAV header is well-formed
const fakePcm = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]); // 4 sample frames @ 16-bit mono
const wavBase64 = pcmToWavBase64(fakePcm, { sampleRate: 24000, channels: 1, bitsPerSample: 16 });
const wavBytes = Buffer.from(wavBase64, 'base64');

assert.strictEqual(wavBytes.length, 44 + fakePcm.length, 'WAV = 44-byte header + PCM data');
assert.strictEqual(wavBytes.toString('ascii', 0, 4), 'RIFF');
assert.strictEqual(wavBytes.toString('ascii', 8, 12), 'WAVE');
assert.strictEqual(wavBytes.toString('ascii', 36, 40), 'data');
assert.strictEqual(wavBytes.readUInt32LE(24), 24000, 'sample rate must round-trip');
assert.strictEqual(wavBytes.readUInt32LE(40), fakePcm.length, 'data chunk size must match PCM length');
assert.deepStrictEqual(new Uint8Array(wavBytes.subarray(44)), fakePcm, 'PCM payload must be preserved byte-for-byte');

console.log('selfcheck-tts: all checks passed');
