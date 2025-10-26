import { userAgent } from "next/server";
import { email, z } from "zod";

export const WaitlistSchema = z.object({
  email: z.string().email(),
  source: z.string().max(120).optional(),
  referrer: z.string().max(2048).optional(),
  userAgent: z.string().max(1024).optional(),
  website: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof WaitlistSchema>;
