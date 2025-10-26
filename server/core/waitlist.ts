import { supabaseAdmin } from "../db/supabaseAdmin";
import { normalizeEmail, extractDomain } from "./email";

export async function addToWaitlist(params: {
  email: string;
  source?: string;
  referrer?: string;
  userAgent?: string;
  ip?: string | null;
}) {
  const email = normalizeEmail(params.email);
  const domain = extractDomain(email);
  if (!domain) throw Object.assign(new Error("Invalid Email"), { status: 400 });

  // edu check
  const isEdu = domain.endsWith(".edu");

  let schoolId: string | null = null;
  const { data: school } = await supabaseAdmin
    .from("schools")
    .select("id")
    .eq("domain", domain)
    .eq("is_acitve", true)
    .maybeSingle();

  if (school) schoolId = school.id;

  let ip_hash: string | null = null;
  try {
    const { hashIP } = await import("@/server/core/hash");
    ip_hash = hashIP(params.ip);
  } catch {
    // skip silently if no hash
  }

  const { data, error } = await supabaseAdmin
    .from("waitlist_submissions")
    .upsert(
      {
        email,
        email_domain: domain,
        is_edu: isEdu,
        school_id: schoolId,
        source: params.source ?? null,
        referrer: params.referrer ?? null,
        user_agent: params.userAgent ?? null,
        ip_hash,
      },
      {
        onConflict: "email",
      }
    )
    .select()
    .single();

  if (error) throw error;
  return data;
}
