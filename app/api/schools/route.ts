import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from('schools')
      .select('id, name')
      .eq('is_active', true)
      .order('name', { ascending: true });
    if (error) throw error;
    return NextResponse.json({ schools: data });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status: 500 });
  }
}
