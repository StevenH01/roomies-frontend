// app/admin/page.tsx
import { supabaseServer } from '@/lib/supabase/server';

export default async function AdminHome() {
  // ✅ supabaseServer is async in Next 15 — await it
  const sb = await supabaseServer();

  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return <p>Access denied</p>;

  // maybeSingle() won't throw if the row is missing
  const { data: profile, error } = await sb
    .from('profiles')
    .select('role')
    .eq('user_id', user.id)
    .maybeSingle();

  if (error || !profile || (profile.role !== 'admin' && profile.role !== 'engineer')) {
    return <p>Access denied</p>;
  }

  return <div>Welcome, admin</div>;
}
