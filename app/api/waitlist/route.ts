import { NextRequest, NextResponse } from "next/server";
import { WaitlistSchema } from "@/server/schema/waitlist";
import { addToWaitlist } from "@/server/core/waitlist";

export const runtime = "nodejs"; // ensure Node APIs are available

// Optional: restrict cross-origin posts (adjust to your prod domain)
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean); // e.g., "http://localhost:3000,https://yourdomain.com"

export async function POST(req: NextRequest) {
  try {
    // Basic origin check (skip if ALLOWED_ORIGINS unset)
    const origin = req.headers.get("origin");
    if (ALLOWED_ORIGINS.length && origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json(
        { error: "Origin not allowed" },
        { status: 403 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const parsed = WaitlistSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Honeypot: if a hidden "website" field is filled, silently succeed
    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 204 });
    }

    // Derive metadata
    const xff = req.headers.get("x-forwarded-for") ?? "";
    const ip = xff.split(",")[0]?.trim() || null;

    const referrer =
      parsed.data.referrer ?? req.headers.get("referer") ?? undefined;
    const ua =
      parsed.data.userAgent ?? req.headers.get("user-agent") ?? undefined;

    const row = await addToWaitlist({
      email: parsed.data.email,
      source: parsed.data.source,
      referrer,
      userAgent: ua,
      ip,
    });

    return NextResponse.json({ ok: true, id: row.id }, { status: 201 });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json(
      { error: err?.message ?? "Internal error" },
      { status }
    );
  }
}
