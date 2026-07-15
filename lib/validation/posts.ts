import { z } from "zod";

const MAX_IMAGE_SIZE = 4.5 * 1024 * 1024; // 4.5MB — Vercel Server Action body size limit
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

export const postSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  excerpt: z
    .string()
    .min(1, "Excerpt is required")
    .max(300, "Excerpt is too long (max 300 characters)"),
  category: z.string().min(1, "Category is required"),
  content: z.string().min(1, "Content is required"),
  image: z
    .instanceof(File, { message: "Cover image is required" })
    .refine((file) => file.size > 0, "Cover image is required")
    .refine((file) => file.size <= MAX_IMAGE_SIZE, "Image must be under 4.5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Image must be JPEG, PNG, WEBP, or GIF",
    ),
});
