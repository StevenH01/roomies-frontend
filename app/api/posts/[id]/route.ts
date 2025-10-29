// app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const sb = await supabaseServer();                             // await the client
    const { data: { user } } = await sb.auth.getUser();            // await getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { data, error } = await sb                               // use the awaited client
      .from('room_posts')
      .update(body)
      .eq('id', params.id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ post: data });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status: err?.status ?? 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const sb = await supabaseServer();
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { error } = await sb
      .from('room_posts')
      .delete()
      .eq('id', params.id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status: err?.status ?? 500 });
  }
}
