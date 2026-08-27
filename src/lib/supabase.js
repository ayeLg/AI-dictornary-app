import { createClient } from '@supabase/supabase-js';

// Supabase project credentials
const SUPABASE_URL  = 'https://wtpzgvjmdhuiacruixxy.supabase.co';
const SUPABASE_ANON = 'sb_publishable_HeXlfB6jbmTconZ4rl6s0A_GI-c6xvN';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

/* ── Auth helpers ── */

export function onAuthStateChange(callback) {
  console.log('Supabase: Setting up onAuthStateChange listener');
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      console.log('Supabase Auth Event:', event, session?.user ? 'User detected' : 'No user');
      callback(session?.user ?? null);
    }
  );
  return () => subscription.unsubscribe();
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: globalThis.location.origin + globalThis.location.pathname },
  });
  if (error) throw error;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

/* ── Cloud data (saved words, apiKey, srsData) ── */

export async function cloudSave(uid, saved, apiKey, srsData) {
  const data = { id: uid, saved, updated_at: new Date().toISOString() };
  if (apiKey !== undefined) data.api_key = apiKey;
  if (srsData !== undefined) data.srs_data = srsData;

  const { error } = await supabase
    .from('users')
    .upsert(data, { onConflict: 'id' });

  if (error) throw error;
}

export async function cloudLoad(uid) {
  const { data, error } = await supabase
    .from('users')
    .select('saved, api_key, srs_data')
    .eq('id', uid)
    .maybeSingle();

  if (error) throw error;
  if (!data) return { saved: [], apiKey: null, srsData: {} };

  return {
    saved:   data.saved || [],
    apiKey:  data.api_key || null,
    srsData: data.srs_data || {},
  };
}

/* ── Audio clips (Listen tab — one row per word, not one blob per user) ── */

export async function cloudSaveAudio(uid, word, audio_my) {
  const { error } = await supabase
    .from('audio_clips')
    .upsert(
      { user_id: uid, word: word.toLowerCase(), audio_my, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,word' }
    );
  if (error) throw error;
}

export async function cloudLoadAudioWords(uid) {
  const { data, error } = await supabase.from('audio_clips').select('word').eq('user_id', uid);
  if (error) throw error;
  return (data || []).map(r => r.word);
}

export async function cloudLoadAudio(uid, word) {
  const { data, error } = await supabase
    .from('audio_clips')
    .select('audio_my')
    .eq('user_id', uid)
    .eq('word', word.toLowerCase())
    .maybeSingle();
  if (error) throw error;
  return data?.audio_my || null;
}
