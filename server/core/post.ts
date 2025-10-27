import { supabaseServer } from '@/lib/supabase/server';
import type { CreatePostInput } from '@/server/schema/posts';

export async function createPost(input: CreatePostInput) {
  const supabase = supabaseServer();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw Object.assign(new Error('Unauthorized'), { status: 401 });

  const { data: profile, error: profileErr } = await supabase
    .from('profiles')
    .select('user_id, school_id')
    .eq('user_id', user.id)
    .maybeSingle();

  if (profileErr) throw profileErr;
  if (!profile) throw Object.assign(new Error('Profile missing'), { status: 403 });

  const payload = {
    user_id: profile.user_id,
    school_id: input.schoolId,
    kind: input.kind,
    title: input.title,
    description: input.description ?? null,
    budget_min: input.budgetMin ?? null,
    budget_max: input.budgetMax ?? null,
    lat: input.lat ?? null,
    lng: input.lng ?? null,
    move_in_date: input.moveInDate ? new Date(input.moveInDate).toISOString().slice(0,10) : null
  };

  const { data, error } = await supabase.from('room_posts').insert(payload).select().single();
  if (error) throw error;
  return data;
}

export async function listPosts(params: { schoolId?: string; kind?: 'looking'|'offering' }) {
  const supabase = supabaseServer();
  let query = supabase.from('room_posts').select('*').order('created_at', { ascending: false });
  if (params.schoolId) query = query.eq('school_id', params.schoolId);
  if (params.kind) query = query.eq('kind', params.kind);
  const { data, error } = await query;
  if (error) throw error;
  return data;
}
