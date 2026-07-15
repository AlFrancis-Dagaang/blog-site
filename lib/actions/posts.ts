"use server";

import { verifyAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { uploadFile } from "@/lib/storage";
import { buildCoverImageKey } from "@/lib/storage/keys";
import { postSchema } from "@/lib/validation/posts";

export type ActionState =
  | { status: "idle" }
  | { status: "error"; errors: Record<string, string[] | undefined> }
  | { status: "success" }
  | { status: "success"; slug: string };

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function createPost(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return {
      status: "error",
      errors: { _form: ["Unauthorized. Please log in again."] },
    };
  }

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    category: formData.get("category"),
    content: formData.get("content"),
    image: formData.get("image"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { title, excerpt, category, content, image } = parsed.data;
  const slug = slugify(title);

  let coverImageUrl: string;
  try {
    const key = buildCoverImageKey(slug, image.name);
    coverImageUrl = await uploadFile(key, image);
  } catch (err) {
    console.error("Cover image upload failed:", err);
    return {
      status: "error",
      errors: { image: ["Failed to upload cover image. Please try again."] },
    };
  }

  try {
    await db.insert(posts).values({
      title,
      slug,
      excerpt,
      category,
      coverImage: coverImageUrl,
      body: content,
    });
  } catch (err) {
    console.error("Post insert failed:", err);
    return {
      status: "error",
      errors: {
        title: ["A post with this title (or a matching slug) already exists."],
      },
    };
  }

  return { status: "success", slug };
}
