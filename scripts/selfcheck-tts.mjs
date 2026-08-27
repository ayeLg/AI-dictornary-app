import assert from 'node:assert';
import { buildSpeechScript } from '../src/lib/geminiTts.js';

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

console.log('selfcheck-tts: all checks passed');
