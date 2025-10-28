// server/core/session.ts
import { supabaseServer } from '@/lib/supabase/server';

export async function getSessionAndProfile() {
  const sb = await supabaseServer();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return { user: null, profile: null };

  const { data: profile, error } = await sb
    .from('profiles')
    .select('user_id, role, school_id')
    .eq('user_id', user.id)
    .maybeSingle();

  if (error) throw error;
  return { user, profile };
}
