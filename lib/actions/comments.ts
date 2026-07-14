"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { comments } from "@/lib/db/schema";
import { getCommentsByPostId } from "@/lib/queries/comments";
import { commentSchema } from "@/lib/validation/comments";

type ActionState =
  | { status: "idle" }
  | { status: "error"; errors: Record<string, string[] | undefined> }
  | { status: "success" };

export async function addComment(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const postId = String(formData.get("postId") ?? "");
  const slug = String(formData.get("slug") ?? "");
  const isAnonymous = formData.get("isAnonymous") === "true";

  const authorName = isAnonymous
    ? "Anonymous"
    : String(formData.get("authorName") ?? "");

  const parsed = commentSchema.safeParse({
    authorName,
    body: formData.get("body"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (!postId) {
    return {
      status: "error",
      errors: { body: ["Something went wrong — missing post reference."] },
    };
  }

  await db.insert(comments).values({
    postId,
    authorName: parsed.data.authorName,
    body: parsed.data.body,
  });

  revalidatePath(`/blog/${slug}`);

  return { status: "success" };
}

export async function getAllCommentsForPost(postId: string) {
  return getCommentsByPostId(postId);
}
