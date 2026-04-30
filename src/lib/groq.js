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

let _orKey = '';
export function setOrKey(key) { _orKey = key || ''; }

let _lastAPI = 'groq';
export function getLastUsedAPI() { return _lastAPI; }

const FAST_MODEL = 'llama-3.1-8b-instant';
const FULL_MODEL = 'llama-3.3-70b-versatile';
const GEMINI_MODEL = 'google/gemini-2.0-flash-001';
const OR_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OR_HEADERS = { 'HTTP-Referer': 'https://ayeLg.github.io', 'X-Title': 'Mingalar Dictionary' };

async function callAPI(url, apiKey, model, prompt, temp, maxTokens, extraHeaders = {}) {
  const isOpenRouter = url.includes('openrouter');
  const body = {
    model,
    messages: [{ role: 'user', content: prompt }],
    temperature: temp,
    max_tokens: maxTokens,
  };
  if (!isOpenRouter) body.response_format = { type: 'json_object' };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`, ...extraHeaders },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    const err = new Error(e.error?.message || `API Error ${res.status}`);
    err.status = res.status;
    throw err;
  }
  const data = await res.json();
  if (data.error) {
    const err = new Error(data.error.message || 'API error');
    err.status = data.error.code || res.status;
    throw err;
  }
  return (data.choices?.[0]?.message?.content || '').trim();
}

export async function groqAI(apiKey, prompt, temp = 0.1, maxTokens = 2048, fast = false) {
  const model = fast ? FAST_MODEL : FULL_MODEL;
  const result = await callAPI(
    'https://api.groq.com/openai/v1/chat/completions',
    apiKey, model, prompt, temp, maxTokens
  );
  _lastAPI = 'groq';
  return result;
}

function mergeDupePOS(meanings) {
  if (!Array.isArray(meanings)) return meanings;
  const map = new Map();
  for (const m of meanings) {
    const key = (m.pos || '').toLowerCase();
    if (map.has(key)) {
      map.get(key).definitions = [...map.get(key).definitions, ...(m.definitions || [])];
    } else {
      map.set(key, { ...m, definitions: [...(m.definitions || [])] });
    }
  }
  return Array.from(map.values());
}

export async function fetchWord(word, apiKey) {
  const prompt = `You are a comprehensive English-Myanmar dictionary. Analyze "${word}" and return ONLY raw JSON (no markdown):

{
  "word": "correct normalized form",
  "corrected_word": null,
  "phonetic": "/fəˈnɛtɪk/",
  "english_meaning": "primary meaning (first definition)",
  "myanmar_meaning": "ပထမအဓိပ္ပာယ် မြန်မာဘာသာ",
  "meanings": [
    {
      "pos": "preposition",
      "pos_my": "ဝိဘတ်",
      "definitions": [
        {
          "definition_en": "concise English definition of this specific sense",
          "definition_my": "မြန်မာဘာသာ အဓိပ္ပာယ်",
          "register": "neutral",
          "usage_note": "Brief usage pattern or context (sentence position, grammar pattern, when to use)",
          "examples": [
            {"en": "Short natural example.", "my": "မြန်မာ ဥပမာ"},
            {"en": "Another short example.", "my": "မြန်မာ ဥပမာ"}
          ]
        }
      ]
    }
  ],
  "collocations": [
    {"collocation": "phrase", "meaning_my": "အဓိပ္ပာယ်", "example_en": "example."}
  ],
  "idioms": [
    {"phrase": "idiom", "meaning_en": "non-literal meaning", "meaning_my": "မြန်မာ", "example_en": "example."}
  ],
  "word_forms": {"noun": null, "verb": null, "adjective": null, "adverb": null},
  "synonyms": [
    {
      "word": "synonym_word",
      "nuance_en": "How this word DIFFERS from the main word — what makes it distinct (intensity, formality, context, connotation)",
      "nuance_my": "မြန်မာဘာသာဖြင့် ကွာခြားချက် — ဘာကြောင့်ကွာနေတာလဲ",
      "use_when": "Use this word when: [specific situation or context where this synonym is better/more natural]"
    }
  ],
  "antonyms": ["w1","w2"],
  "related_words": ["w1","w2","w3","w4"]
}

DEFINITION RULES (most important):
- CRITICAL: Each POS (verb/noun/adjective etc) must appear EXACTLY ONCE in the meanings array. Group ALL definitions for the same POS under one entry. NEVER repeat the same pos value.
- Cover ALL major distinct senses and ALL parts of speech the word has.
- For prepositions (in/on/at/by/for/with etc): include AT LEAST 5-8 definitions covering: place/location, time, state/condition, manner, purpose, cause, agent, membership — whichever apply.
- For conjunctions/adverbs with positional uses (beginning vs sentence-final): EACH position = its own definition. E.g. "tho" → def1: used at start/middle like "although"; def2: sentence-final informal tag "That's cool, tho."
- For verbs with distinct senses (run a business vs run a race): each sense = its own definition.
- Do NOT collapse multiple senses into one definition — be comprehensive like Oxford/Merriam-Webster.

OTHER RULES:
- pos_my: ကြိယာ(verb)/နာမ်(noun)/နာမဝိသေသန(adj)/ကြိယာဝိသေသန(adv)/သမ္ဗန္ဓကြိယာ(conj)/ဝိဘတ်(prep)/အပိုဒ်ကုန်(sentence-final) etc
- register: "formal"|"informal"|"slang"|"neutral"
- usage_note: short (1-2 sentences max). Null string "" if nothing to add.
- examples: 2 per definition, SHORT sentences, must match that specific sense
- collocations: 3-5 key combos that shift meaning
- idioms: 2-4 non-literal phrases, empty array [] if none
- english_meaning/myanmar_meaning = first sense of first POS
- phonetic: IPA. corrected_word: typo fix or null.
- synonyms: 2-4 synonyms as OBJECTS {word, nuance_en, nuance_my, use_when}. nuance_en = what specifically makes this synonym different from the main word (intensity, formality, connotation, typical context). use_when = concrete situation where this synonym is more appropriate than the main word.
- antonyms: simple string array
- related_words: 4 worth learning next
- Return raw JSON only`;

  const raw = _orKey
    ? await callAPI(OR_URL, _orKey, GEMINI_MODEL, prompt, 0.15, 4000, OR_HEADERS)
    : await groqAI(apiKey, prompt, 0.15, 4000, true);
  _lastAPI = _orKey ? 'openrouter' : 'groq';
  const parsed = safeParseJSON(raw);
  if (parsed.meanings) parsed.meanings = mergeDupePOS(parsed.meanings);
  return parsed;
}

// Weighted random pick: higher freq words appear more but not exclusively
function weightedShuffle(arr, freqs) {
  const weighted = arr.map(w => ({
    item: w,
    weight: 1 + (freqs[w.word] || 0) * 0.5 + Math.random() * 2, // freq boost + strong random
  }));
  return weighted.sort((a, b) => b.weight - a.weight).map(x => x.item);
}

export async function fetchQuiz(saved, apiKey, freqs = {}, recentWords = []) {
  const numQ = Math.min(6, saved.length);

  // Weighted-random shuffle so different words appear each session
  const shuffled = weightedShuffle([...saved], freqs);

  // Prefer words NOT recently tested, but still include some if pool is small
  const fresh = shuffled.filter(w => !recentWords.includes(w.word));
  const pool = fresh.length >= numQ ? fresh : shuffled; // fallback to full list if not enough fresh
  const wordList = pool.slice(0, 14).map(w => ({ word: w.word, myanmar_meaning: w.myanmar_meaning }));

  const avoidNote = recentWords.length > 0
    ? `\nAVOID testing these recently asked words if possible: ${recentWords.join(', ')}`
    : '';

  // Random seed string for output variety
  const seed = Math.random().toString(36).slice(2, 8);

  const raw = await groqAI(apiKey, `English-Myanmar vocabulary quiz. Session seed: ${seed}
Words available: ${JSON.stringify(wordList)}
${avoidNote}

Generate ${numQ} MCQ questions. Alternate Type A and Type B. Pick DIFFERENT words for each question.

Type A (English → Myanmar): question_text = "What is the Myanmar meaning of '[english_word]'?"
Type B (Myanmar → English): question_text = "What is the English word for '[actual_myanmar_meaning_here]'?"

Rules:
- Each question must test a DIFFERENT word from the list
- Type B: MUST put the actual Myanmar meaning text inside the question_text
- All options: max 5 words each
- Shuffle correct answer position randomly (different position each question)
- Wrong options must be plausible but clearly wrong

Return JSON object with a "questions" array:
{"questions":[
  {"type":"A","word":"drench","question_text":"What is the Myanmar meaning of 'drench'?","correct":"ရေစိုအောင်","options":["ရေစိုအောင်","ပျော်ရွှင်","မြန်မြန်","ကြောက်"],"explanation":"Drench means to soak completely."},
  {"type":"B","word":"timid","question_text":"What is the English word for 'ရဲရင့်မှုမရှိသော'?","correct":"timid","options":["timid","brave","strong","reckless"],"explanation":"Timid means lacking courage."}
]}`, 0.6, 3000, true);

  return safeParseJSON(raw).questions;
}

export async function fetchExplain(text, apiKey) {
  const raw = await groqAI(apiKey, `You are an English teacher for Myanmar students.

Analyze this English text and help the student understand it:
"${text}"

Return ONLY raw JSON (no markdown):
{
  "summary_my": "မြန်မာဘာသာဖြင့် အနှစ်ချုပ်",
  "key_concepts": ["concept1", "concept2"],
  "difficult_words": [
    {"word": "...", "meaning_en": "simple English meaning", "meaning_my": "မြန်မာဘာသာ"}
  ]
}

Rules:
- summary_my: 2-3 sentences in Myanmar explaining the main idea
- key_concepts: 3-5 important concepts/terms from the text (English)
- difficult_words: words that are intermediate/advanced level, max 8 words
- meaning_my must be in Myanmar script`, 0.1, 2048);
  return safeParseJSON(raw);
}

export async function fetchWritingFeedback(text, topic, apiKey) {
  const raw = await groqAI(apiKey, `You are an English writing coach for Myanmar students.

Topic: "${topic}"
Student's writing: "${text}"

Analyze and return ONLY raw JSON (no markdown):
{
  "score": 7,
  "corrected": "full corrected version of the text",
  "overall_feedback_my": "မြန်မာဘာသာဖြင့် အတိုချုပ် feedback (2-3 sentences)",
  "errors": [
    {"original": "wrong phrase", "corrected": "correct phrase", "explanation_my": "မြန်မာဘာသာဖြင့် ရှင်းပြချက်"}
  ]
}

Rules:
- score: 1-10 based on grammar, vocabulary, fluency
- corrected: keep the student's ideas but fix grammar/vocabulary
- errors: list top 3-5 most important mistakes only
- explanation_my must be in Myanmar script
- overall_feedback_my must be encouraging and in Myanmar script`, 0.1, 3000);
  return safeParseJSON(raw);
}

export async function fetchTranslateMY(text, apiKey) {
  const raw = await groqAI(apiKey, `You are a Myanmar-English translation assistant.

Translate this Myanmar text to English and help the learner understand it:
"${text}"

Return ONLY raw JSON (no markdown):
{
  "translation_en": "Full natural English translation here",
  "summary_my": "မြန်မာဘာသာဖြင့် အနှစ်ချုပ် (2-3 ကြောင်း)",
  "key_vocab": [
    {"word_my": "မြန်မာစကား", "word_en": "English word", "meaning_en": "brief English definition"}
  ]
}

Rules:
- translation_en: fluent, natural English (not word-for-word literal)
- summary_my: brief Myanmar explanation of what the text means/context
- key_vocab: 4-8 notable Myanmar words from the text with their English equivalents
- key_vocab meaning_en: short, simple definition`, 0.1, 2048);
  return safeParseJSON(raw);
}

export async function fetchConversation(topic, level, apiKey) {
  const raw = await groqAI(apiKey, `You are an English conversation coach for Myanmar students.

Generate a natural English conversation about: "${topic}"
Level: ${level} (beginner/intermediate/advanced)

Return ONLY raw JSON (no markdown):
{
  "situation": "Brief situation description in English",
  "situation_my": "မြန်မာဘာသာဖြင့် အခြေအနေဖော်ပြချက်",
  "dialogue": [
    {"speaker": "A", "name": "Alex", "text": "English line here", "translation_my": "မြန်မာဘာသာပြန်"},
    {"speaker": "B", "name": "Ben",  "text": "English line here", "translation_my": "မြန်မာဘာသာပြန်"}
  ],
  "useful_phrases": [
    {"phrase": "English phrase", "meaning_my": "မြန်မာအဓိပ္ပာယ်", "usage": "when to use it in English"}
  ]
}

Rules:
- dialogue: 8-12 turns, natural and realistic, not textbook-stiff
- level beginner: short sentences, common words; intermediate: varied grammar; advanced: idioms, complex sentences
- useful_phrases: 4-6 key phrases from the conversation worth remembering
- All translation_my and meaning_my must be in Myanmar script`, 0.4, 3000);
  return safeParseJSON(raw);
}

export async function fetchStory(topic, genre, apiKey) {
  const raw = await groqAI(apiKey, `You are a creative English writer for Myanmar students learning English reading.

Write an engaging ${genre} piece about: "${topic}"

Return ONLY raw JSON (no markdown):
{
  "title": "Story title",
  "genre": "${genre}",
  "intro_my": "မြန်မာဘာသာဖြင့် မိတ်ဆက် (1-2 ကြောင်း)",
  "paragraphs": [
    "First paragraph text (~150-200 words)...",
    "Second paragraph text (~150-200 words)...",
    "Third paragraph text (~150-200 words)...",
    "Fourth paragraph text (~150-200 words)...",
    "Fifth paragraph text (~150-200 words)..."
  ],
  "difficult_words": [
    {"word": "...", "meaning_en": "simple English meaning", "meaning_my": "မြန်မာဘာသာ"}
  ],
  "comprehension_my": [
    "မြန်မာဘာသာဖြင့် နားလည်မှုစစ်ဆေးသောမေးခွန်း ၁",
    "မြန်မာဘာသာဖြင့် နားလည်မှုစစ်ဆေးသောမေးခွန်း ၂",
    "မြန်မာဘာသာဖြင့် နားလည်မှုစစ်ဆေးသောမေးခွန်း ၃"
  ]
}

Rules:
- paragraphs: exactly 5 paragraphs, each ~150-200 words, vivid and engaging
- difficult_words: 6-10 intermediate/advanced words the student might not know
- comprehension_my: 3 questions in Myanmar to check understanding
- Write in clear, engaging English appropriate for language learners`, 0.6, 4096);
  return safeParseJSON(raw);
}

export async function fetchDailyWordList(level, apiKey) {
  const levelDesc = {
    basic:        'A1-A2 level, very common everyday words (happy, busy, tired, kind, angry...)',
    intermediate: 'B1-B2 level, common but slightly more challenging words (grateful, curious, ambitious, reluctant...)',
    advanced:     'C1-C2 level, sophisticated vocabulary (ephemeral, tenacious, eloquent, pragmatic...)',
  }[level];

  const seed = Math.random().toString(36).slice(2, 6);
  const raw = await groqAI(apiKey, `Generate 10 useful English vocabulary words for Myanmar learners. Seed: ${seed}

Level: ${level} — ${levelDesc}

Pick VARIED words across different parts of speech (nouns, verbs, adjectives, adverbs).
Choose words that are genuinely useful in daily life or writing.

Return ONLY raw JSON:
{
  "words": [
    {
      "word": "grateful",
      "pos": "adjective",
      "myanmar_meaning": "ကျေးဇူးတင်သော",
      "example_en": "She felt grateful for all the help she received.",
      "example_my": "သူမသည် ရရှိသော အကူအညီများအတွက် ကျေးဇူးတင်ခဲ့သည်"
    }
  ]
}

Rules:
- Exactly 10 words
- All different words, varied parts of speech
- myanmar_meaning: concise Myanmar translation (5 words max)
- example_en: short natural sentence (max 12 words)
- example_my: Myanmar translation of the example
- Return raw JSON only`, 0.7, 3000, true);
  return safeParseJSON(raw).words;
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

export async function fetchVoiceOpener(topic, apiKey) {
  const raw = await groqAI(apiKey, `You are a friendly English conversation partner helping a Myanmar student practice English speaking.

Start a short, natural conversation about: "${topic}"
Say one opening question or statement (1-2 sentences max) to kick off the conversation.

Return ONLY raw JSON:
{
  "opener_en": "Your friendly opening line in English (1-2 sentences)",
  "opener_my": "မြန်မာဘာသာဖြင့် ဘာသာပြန်ချက်",
  "suggested_replies": [
    "Short natural reply the student could say (max 10 words)",
    "Another option",
    "Another option"
  ]
}

Rules:
- opener_en: casual, friendly, easy to understand (B1 level max)
- suggested_replies: 3 short natural phrases, varied (e.g. agree / disagree / question)
- Keep it conversational, not textbook`, 0.8, 512);
  return safeParseJSON(raw);
}

export async function fetchVoiceReply(topic, history, userMessage, apiKey) {
  const historyText = history.map(h => `${h.role === 'user' ? 'Student' : 'AI'}: ${h.text}`).join('\n');
  const raw = await groqAI(apiKey, `You are a friendly English conversation partner talking with a Myanmar student about "${topic}".

Conversation so far:
${historyText || '(just started)'}
Student just said: "${userMessage}"

Respond naturally and keep the conversation going. Stay on topic. 1-3 sentences max.

Return ONLY raw JSON:
{
  "reply_en": "Your natural conversational response in English",
  "reply_my": "မြန်မာဘာသာဖြင့် ဘာသာပြန်ချက်",
  "suggested_replies": [
    "Short reply the student could say next (max 10 words)",
    "Another option",
    "Another option"
  ]
}

Rules:
- reply_en: natural, friendly, 1-3 sentences, B1-B2 level vocabulary
- Ask a follow-up question to keep the conversation flowing
- suggested_replies: 3 varied, natural short phrases the student could respond with`, 0.7, 512);
  return safeParseJSON(raw);
}
