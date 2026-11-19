import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;

if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export function getSupabaseClient() {
  if (!supabase) {
    throw new Error(
      'Kredensial Supabase belum lengkap. Pastikan SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY sudah diisi di file .env.'
    );
  }
  return supabase;
}

export default supabase;