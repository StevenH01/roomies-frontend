// server/core/rateLimit.ts
import { NextRequest } from 'next/server';

/**
 * Dev-only in-memory rate limiter (single process).
 * Not suitable for serverless or multi-region — use Upstash/Redis when you’re ready.
 * Enable by setting ENABLE_DEV_RATE_LIMIT=true in `.env.local`.
 */

const ENABLE_DEV_LIMIT = process.env.ENABLE_DEV_RATE_LIMIT === 'true';

// 10 requests per 60s per (ip,keyHint)
const WINDOW_MS = 60_000;
const MAX = 10;

type Bucket = { count: number; resetAt: number };
const buckets: Map<string, Bucket> = new Map();

export async function rateLimitOrThrow(req: NextRequest, keyHint: string) {
  if (!ENABLE_DEV_LIMIT) return; // no-op unless explicitly enabled

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'ip:unknown';
  const key = `${keyHint}:${ip}`;
  const now = Date.now();

  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return;
  }

  if (b.count >= MAX) {
    const err: any = new Error('Rate limit exceeded');
    err.status = 429;
    err.retryAfter = Math.ceil((b.resetAt - now) / 1000);
    throw err;
  }

  b.count += 1;
}
