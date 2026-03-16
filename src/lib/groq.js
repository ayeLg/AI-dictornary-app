// Robustly extract and parse the first balanced JSON object or array from text
function safeParseJSON(text) {
  try { return JSON.parse(text.trim()); } catch {}
  let start = -1, openChar, closeChar;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{') { start = i; openChar = '{'; closeChar = '}'; break; }
    if (text[i] === '[') { start = i; openChar = '['; closeChar = ']'; break; }
  }
  if (start === -1) throw new Error('No JSON found in response');
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (esc) { esc = false; continue; }
    if (c === '\\' && inStr) { esc = true; continue; }
    if (c === '"') { inStr = !inStr; continue; }
    if (inStr) continue;
    if (c === openChar) depth++;
    if (c === closeChar && --depth === 0) return JSON.parse(text.slice(start, i + 1));
  }
  throw new Error('Malformed JSON in response');
}

export const CONTEXTS = [
  { key: 'morning', icon: '🌅', label: 'Morning Routine' },
  { key: 'work',    icon: '💼', label: 'At Work / Study' },
  { key: 'social',  icon: '👥', label: 'Social / Chat' },
  { key: 'evening', icon: '🌙', label: 'Evening' },
];

export async function groqAI(apiKey, prompt, temp = 0.1, maxTokens = 2048) {
  const url = `https://api.groq.com/openai/v1/chat/completions`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: temp,
      max_tokens: maxTokens,
      response_format: { type: 'json_object' },
    }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error?.message || `API Error ${res.status}`);
  }
  const data = await res.json();
  return (data.choices?.[0]?.message?.content || '').trim();
}

export async function fetchWord(word, apiKey) {
  const raw = await groqAI(apiKey, `Analyze the English word or phrase "${word}" and return ONLY valid JSON (no markdown, no code fences) with this exact structure:
{
  "word": "correct/normalized form of the input",
  "corrected_word": null,
  "english_meaning": "clear concise English definition",
  "myanmar_meaning": "မြန်မာဘာသာဖြင့် ရှင်းလင်းသောအဓိပ္ပာယ်",
  "word_forms": {
    "noun": "noun form or null",
    "verb": "verb form or null",
    "adjective": "adjective form or null",
    "adverb": "adverb form or null"
  },
  "synonyms": ["word1","word2","word3","word4"],
  "antonyms": ["word1","word2","word3"],
  "related_words": ["word1","word2","word3","word4"],
  "examples": [
    {"en": "First example sentence.", "my": "ပထမဥပမာကြောင်း မြန်မာဘာသာ။"},
    {"en": "Second example sentence.", "my": "ဒုတိယဥပမာကြောင်း မြန်မာဘာသာ။"}
  ]
}
related_words: 4 semantically related words worth learning next (not synonyms/antonyms).
If input has a typo, set corrected_word to the correct spelling. Otherwise null.
Return raw JSON only.`);
  return safeParseJSON(raw);
}

export async function fetchQuiz(saved, apiKey, freqs = {}) {
  const numQ = Math.min(6, saved.length);  // max 6 questions to avoid token overflow
  // Sort by frequency (most searched first)
  const wordList = [...saved]
    .sort((a, b) => (freqs[b.word] || 0) - (freqs[a.word] || 0))
    .slice(0, 12)  // limit word list to 12 to keep prompt short
    .map(w => ({ word: w.word, myanmar_meaning: w.myanmar_meaning }));

  const freqNote = Object.keys(freqs).length > 0
    ? `\nPrioritize these words: ${[...saved].sort((a,b)=>(freqs[b.word]||0)-(freqs[a.word]||0)).slice(0,5).map(w=>w.word).join(', ')}`
    : '';

  const raw = await groqAI(apiKey, `English-Myanmar vocabulary quiz. Words: ${JSON.stringify(wordList)}
${freqNote}

Generate ${numQ} MCQ questions. Alternate Type A and Type B.

Type A (English → Myanmar): question_text = "What is the Myanmar meaning of '[english_word]'?"
Type B (Myanmar → English): question_text = "What is the English word for '[actual_myanmar_meaning_here]'?"

Rules:
- Type B: MUST put the actual Myanmar meaning text inside the question_text
- All options: max 5 words each
- Shuffle correct answer position randomly among 4 options

Return JSON object with a "questions" array:
{"questions":[
  {"type":"A","word":"drench","question_text":"What is the Myanmar meaning of 'drench'?","correct":"ရေစိုအောင်","options":["ရေစိုအောင်","ပျော်ရွှင်","မြန်မြန်","ကြောက်"],"explanation":"Drench means to soak completely."},
  {"type":"B","word":"timid","question_text":"What is the English word for 'ရဲရင့်မှုမရှိသော'?","correct":"timid","options":["timid","brave","strong","reckless"],"explanation":"Timid means lacking courage."}
]}`, 0.2, 3000);

  return safeParseJSON(raw).questions;
}

export async function fetchDaily(words, apiKey) {
  const raw = await groqAI(apiKey, `I'm learning English. My vocabulary words: ${words.map(w => w.word).join(', ')}

Create natural conversational English sentences using these words in 4 daily contexts (2-3 sentences each).
Sentences must feel real, not textbook-style. Try to use each word at least once.

Return ONLY raw JSON:
{
  "morning": [{"sentence":"...","words_used":["word"]}],
  "work":    [{"sentence":"...","words_used":["word"]}],
  "social":  [{"sentence":"...","words_used":["word"]}],
  "evening": [{"sentence":"...","words_used":["word"]}]
}`, 0.7);
  return safeParseJSON(raw);
}
