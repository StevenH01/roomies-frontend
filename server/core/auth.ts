import { supabaseAdmin } from '@/server/db/supabaseAdmin';
import { extractDomain, normalizeEmail } from './email';


type Role = 'student' | 'admin' | 'engineer';

export async function registerUser(params: {
  email: string;
  password: string;
  inviteToken?: string;
}) {
  const email = normalizeEmail(params.email);
  const domain = extractDomain(email);
  if (!domain) throw Object.assign(new Error('Invalid email'), { status: 400 });

  let role: Role = 'student';
  let schoolId: string | null = null;

  const inviteOk = params.inviteToken && params.inviteToken === process.env.TEAM_INVITE_CODE;

  if (!inviteOk) {
    if (!domain.endsWith('.edu')) {
      throw Object.assign(new Error('Only .edu emails are allowed'), { status: 400 });
    }
    const { data: school, error: schoolErr } = await supabaseAdmin
      .from('schools')
      .select('id, is_active')
      .eq('domain', domain)
      .eq('is_active', true)
      .maybeSingle();

    if (schoolErr) throw schoolErr;
    if (!school) {
      throw Object.assign(new Error('Your school is not yet supported'), { status: 403 });
    }
    schoolId = school.id;
  } else {
    role = 'engineer'; // or 'admin' for your first admin
  }

  const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
    email,
    password: params.password,
    email_confirm: false
  });
  if (createErr) {
    if (createErr.message?.toLowerCase().includes('already registered')) {
      throw Object.assign(new Error('Email already registered'), { status: 409 });
    }
    throw createErr;
  }

  const userId = created.user.id;

  const { error: profileErr } = await supabaseAdmin.from('profiles').insert({
    user_id: userId,
    email,
    role,
    school_id: schoolId
  });
  if (profileErr) throw profileErr;

  return { userId, role, schoolId };
}
