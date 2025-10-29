import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function GET() {
  const supabase = await supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ user: null }, { status: 401 });

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('user_id, email, role, school_id, created_at')
    .eq('user_id', user.id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ user, profile });
}
