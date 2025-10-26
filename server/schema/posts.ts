import { z } from 'zod';

export const CreatePostSchema = z.object({
  kind: z.enum(['looking','offering']),
  title: z.string().min(1).max(120),
  description: z.string().max(5000).optional(),
  schoolId: z.string().uuid(),
  budgetMin: z.number().nonnegative().optional(),
  budgetMax: z.number().nonnegative().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  moveInDate: z.string().optional()
});
export type CreatePostInput = z.infer<typeof CreatePostSchema>;
