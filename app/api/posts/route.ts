import { NextRequest, NextResponse } from 'next/server';
import { CreatePostSchema } from '@/server/schema/posts';
import { supabaseServer } from '@/lib/supabase/server';
import { createPost, listPosts } from '@/server/core/post';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const schoolId = searchParams.get('schoolId') || undefined;
    const kind = (searchParams.get('kind') as 'looking'|'offering'|null) || undefined;
    const posts = await listPosts({ schoolId, kind });
    return NextResponse.json({ posts });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status: err?.status ?? 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = supabaseServer();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const parsed = CreatePostSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const post = await createPost(parsed.data);
    return NextResponse.json({ post }, { status: 201 });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status });
  }
}
