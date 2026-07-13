import { z } from "zod";

export const commentSchema = z.object({
  authorName: z.string().min(1).max(80),
  body: z.string().min(10).max(2000),
});
