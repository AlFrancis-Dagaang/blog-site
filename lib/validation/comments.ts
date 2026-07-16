import { z } from "zod";

export const commentSchema = z.object({
  authorName: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(80, "Name is too long"),
  body: z
    .string()
    .trim()
    .min(10, "Comment must be at least 10 characters")
    .max(2000, "Comment is too long (max 2000 characters)"),
});
