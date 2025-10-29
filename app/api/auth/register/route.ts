import { NextRequest, NextResponse } from 'next/server';
import { RegisterSchema } from '@/server/schema/auth';
import { registerUser } from '@/server/core/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = RegisterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }
    const { email, password, inviteToken } = parsed.data;
    const result = await registerUser({ email, password, inviteToken });
    return NextResponse.json({ ok: true, result }, { status: 201 });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json({ error: err?.message ?? 'Internal error' }, { status });
  }
}
