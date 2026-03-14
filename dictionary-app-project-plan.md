# English-Myanmar Dictionary App — Project Plan

## Overview

AI-powered English-Myanmar Dictionary PWA တစ်ခု Gemini API သုံးပြီး build မယ်။  
Server cost မရှိဘဲ iOS နဲ့ Android နှစ်ခုလုံးမှာ အလုပ်လုပ်မယ်။

---

## Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| Frontend | React PWA (Single HTML file) | Free |
| AI | Gemini 2.0 Flash API | Free (1,500 req/day) |
| Database | Supabase Free Tier | Free (500MB) |
| Hosting | GitHub Pages | Free |

---

## App Structure

```
📱 English-Myanmar Dictionary App
├── 🔐 Auth Page          (Login / Register)
├── 📚 Dictionary         (Search & Meaning)
├── 🧠 Quiz               (MCQ 10 Questions)
└── 📖 Daily Usage        (Think in English)
```

---

## Section 1 — Dictionary (📚)

### Features
- English word / phrase ရိုက်ထည့်ပြီး ရှာလို့ရတယ်
- English Meaning ပြပေးတယ်
- Myanmar Meaning ပြပေးတယ်
- Synonyms list ပြပေးတယ်
- Antonyms / Opposites ပြပေးတယ်
- Example sentences (English + Myanmar translation) ပြပေးတယ်
- Word forms ပြပေးတယ် (noun / verb / adjective)
- Word သိမ်းတဲ့ **Save** button ပါတယ်
- Search history ထားတယ်
- Typo ရှိရင်တောင် မှန်းပေးတယ် (`happpy` → `happy`)

### AI Prompt Output (JSON)

```json
{
  "word": "ambitious",
  "english_meaning": "Having a strong desire to succeed or achieve something",
  "myanmar_meaning": "အောင်မြင်လိုစိတ်ပြင်းပြသော",
  "word_forms": {
    "noun": "ambition",
    "adjective": "ambitious",
    "adverb": "ambitiously"
  },
  "synonyms": ["driven", "motivated", "determined", "aspiring"],
  "antonyms": ["lazy", "unmotivated", "complacent", "apathetic"],
  "examples": [
    {
      "en": "She is an ambitious young professional.",
      "my": "သူမသည် အောင်မြင်လိုစိတ်ပြင်းပြသော လုပ်ငန်းရှင်ငယ်တစ်ဦးဖြစ်သည်။"
    },
    {
      "en": "His ambitious plans surprised everyone.",
      "my": "သူ၏ ရည်မှန်းချက်ကြီးသောစီမံချက်များသည် လူအားလုံးကို အံ့အားသင့်စေခဲ့သည်။"
    }
  ]
}
```

---

## Section 2 — Quiz (🧠)

### Purpose
Saved words တွေရဲ့ meaning မှတ်မိလားဆိုတာ စစ်ဆေးတယ်။

### Features
- Saved words ထဲကနေ MCQ **10 questions** generate လုပ်တယ်
- Question types အမျိုးအစား ၂ မျိုး
  - **Type A:** English word → Myanmar meaning ဘယ်ဟာမှန်လဲ
  - **Type B:** Myanmar meaning → English word ဘယ်ဟာမှန်လဲ
- Wrong choices တွေကို **realistic & confusing** ဖြစ်အောင် AI ရွေးတယ်
- Score ပြပေးတယ် (format: `7 / 10`)
- Wrong answers တွေကို ဖြေပြီးရင် ပြန်ပြပေးတယ်
- Quiz history သိမ်းတယ်
- Minimum saved words: **10 words** (quiz လုပ်ဖို့)

### AI Role in Quiz
- MCQ questions generate လုပ်တယ်
- Distractor choices (မှားစေတဲ့ options) ကို smart ရွေးတယ်
- ဖြေပြီးရင် explanation ပေးတယ် (ဘာကြောင့် မှန်/မှားလဲ)
- Questions ထပ်မကျအောင် variety ထိန်းတယ်

---

## Section 3 — Daily Usage (📖)

### Purpose — Think in English

> ရည်ရွယ်ချက်: Brain က Myanmar → English translate မလုပ်တော့ဘဲ  
> တနေ့တာ situation တွေကို **directly English တွေး**တတ်အောင်။

Saved words တွေကို မိမိတနေ့တာ real life context ထဲ naturally ထည့်ပေးတယ်။  
Memorize မလုပ်ဘဲ usage pattern မှတ်မိအောင် sentence တွေနဲ့ brain rewiring လုပ်တာ။

### Features
- Saved words ထဲကနေ daily life scenarios generate လုပ်တယ်
- Context **4 မျိုး** ခွဲပြပေးတယ်
  - 🌅 Morning Routine
  - 💼 At Work / Study
  - 👥 Social / Conversation
  - 🌙 Evening / Reflection
- Word တစ်လုံးကို context အမျိုးမျိုးမှာ sentences **8-10 ခု** ပြပေးတယ်
- Formal / Informal / Business ခွဲပြပေးတယ်
- Copy button ပါတယ်

### Example Output

**Saved words:** `frustrated`, `accomplish`, `exhausted`

```
🌅 Morning Routine
  "I woke up feeling exhausted after a long night."
  "I need to accomplish my tasks before lunch."

💼 At Work
  "I felt frustrated when the meeting ran too long."
  "I managed to accomplish everything on my to-do list."

🌙 Evening
  "Despite feeling exhausted, I felt satisfied with what I accomplished today."
```

---

## AI Usage Plan (Gemini 2.0 Flash)

### Dictionary Prompt
```
Analyze the word "[word]" and return JSON with:
- english_meaning
- myanmar_meaning
- word_forms (noun, verb, adjective, adverb)
- synonyms[]
- antonyms[]
- examples[] with {en, my} pairs
```

### Quiz Prompt
```
Generate 10 MCQ questions from these saved words: [words list].
Mix Type A (English→Myanmar) and Type B (Myanmar→English).
Make wrong choices realistic and confusing.
Include explanation for each correct answer.
Return as JSON array.
```

### Daily Usage Prompt
```
Given saved words: [words list]
Generate daily life scenarios in 4 contexts: Morning, Work, Social, Evening.
Use the saved words naturally in conversational sentences.
Goal: Help user think directly in English without translating from Myanmar.
Sentences must feel natural, not textbook-style.
```

### Smart Features (AI-powered)
- **Typo correction:** `happpy` → Did you mean `happy`?
- **Word suggestions:** `happy` ရှာရင် → `content`, `elated`, `cheerful` suggest
- **Smart quiz:** ကြာကြာ search လုပ်တဲ့ words တွေကို quiz မှာ ပိုမေးတယ်

---

## Database Schema (Supabase)

```
users
├── id (uuid)
├── email
└── created_at

saved_words
├── id (uuid)
├── user_id (foreign key)
├── word (text)
├── english_meaning (text)
├── myanmar_meaning (text)
├── synonyms (jsonb)
├── antonyms (jsonb)
├── search_count (int)
└── saved_at (timestamp)

quiz_history
├── id (uuid)
├── user_id (foreign key)
├── score (int)
├── total (int)
├── words_tested (jsonb)
└── taken_at (timestamp)
```

---

## UI Design

```
Color Scheme : Dark mode (professional)
Font         : Pyidaungsu (Myanmar) + Inter (English)
Layout       : Mobile-first PWA
Navigation   : Bottom tab bar
```

### Bottom Navigation
```
[ 📚 Dictionary ]  [ 🧠 Quiz ]  [ 📖 Daily ]  [ 👤 Profile ]
```

---

## Token & API Usage Estimate

| Section | Tokens/Request | Requests/Day | Daily Tokens |
|---------|---------------|--------------|--------------|
| Dictionary Search | ~800 | 20 | 16,000 |
| Quiz Generation | ~1,200 | 3 | 3,600 |
| Daily Usage | ~1,500 | 5 | 7,500 |
| **Total** | | | **~27,100** |

**Gemini 2.0 Flash Free Limit:** 1,500 requests/day → လုံလောက်တယ် ✅  
**Fallback:** Free limit ကျော်ရင် Claude API (Haiku) သို့ switch လုပ်မယ်

---

## Development Phases

### Phase 1 — Dictionary Core (Week 1)
- [ ] Gemini API setup & test
- [ ] Dictionary search feature (EN + MY meaning)
- [ ] Synonyms, Antonyms, Examples display
- [ ] Word form display
- [ ] Save word feature
- [ ] Basic UI layout & dark mode

### Phase 2 — Quiz & Daily Usage (Week 2)
- [ ] Supabase setup & Auth (Login/Register)
- [ ] Quiz section (MCQ generation)
- [ ] Score & wrong answer review
- [ ] Daily Usage section (scenario generation)
- [ ] PWA setup (installable on iOS & Android)

### Phase 3 — Smart Features & Polish (Week 3)
- [ ] Typo correction
- [ ] Related word suggestions
- [ ] Quiz history & progress tracking
- [ ] UI/UX improvements
- [ ] Error handling & loading states
- [ ] GitHub Pages deploy

---

## Setup Requirements

```
1. Google AI Studio  →  Gemini API Key (Free)
2. Supabase          →  Free project (Database + Auth)
3. GitHub            →  Repository + Pages (Free hosting)
```

---

## Fallback Plan

```
Primary   : Gemini 2.0 Flash (Free tier)
           ↓ (if limit exceeded)
Secondary : Claude API — claude-haiku-4-5
           Cost: ~$1-3/month for personal use
```

---

*Plan version 1.0 — Ready to build Phase 1*
