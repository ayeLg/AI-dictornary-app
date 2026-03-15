export const CONTEXTS = [
  { key: 'morning', icon: '🌅', label: 'Morning Routine' },
  { key: 'work',    icon: '💼', label: 'At Work / Study' },
  { key: 'social',  icon: '👥', label: 'Social / Chat' },
  { key: 'evening', icon: '🌙', label: 'Evening' },
];

export async function groqAI(apiKey, prompt, temp = 0.1) {
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
      max_tokens: 1024,
    }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error?.message || `API Error ${res.status}`);
  }
  const data = await res.json();
  const text = (data.choices?.[0]?.message?.content || '').trim();
  return text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
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
  return JSON.parse(raw);
}

export async function fetchQuiz(saved, apiKey, freqs = {}) {
  const numQ = Math.min(10, saved.length * 2);
  // Sort by frequency (most searched first)
  const wordList = [...saved]
    .sort((a, b) => (freqs[b.word] || 0) - (freqs[a.word] || 0))
    .map(w => ({ word: w.word, myanmar_meaning: w.myanmar_meaning, freq: freqs[w.word] || 0 }));

  const freqNote = wordList.some(w => w.freq > 0)
    ? `\nUser search frequency (higher = more important to test): ${wordList.map(w => `${w.word}(${w.freq}x)`).join(', ')}\nGenerate MORE questions about high-frequency words.`
    : '';

  const raw = await groqAI(apiKey, `Quiz generator for English-Myanmar language learning.

Word list:
${JSON.stringify(wordList.map(w => ({ word: w.word, myanmar_meaning: w.myanmar_meaning })))}
${freqNote}

Generate exactly ${numQ} MCQ questions. Mix Type A (English→Myanmar) and Type B (Myanmar→English) evenly.

Rules:
- Each question: exactly 4 options
- Wrong choices: from other words in the list or plausible alternatives
- Shuffle correct answer position randomly
- 1-sentence explanation per question

Return ONLY a raw JSON array (no markdown):
[{
  "type": "A",
  "word": "english_word",
  "question_text": "What is the Myanmar meaning of 'word'?",
  "correct": "correct answer text",
  "options": ["opt1","opt2","opt3","opt4"],
  "explanation": "Brief explanation."
}]`, 0.3);
  return JSON.parse(raw);
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
  return JSON.parse(raw);
}
