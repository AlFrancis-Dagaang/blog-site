import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import type { Comment } from "@/lib/db/schema";
import { comments } from "@/lib/db/schema";

export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  return db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))
    .orderBy(desc(comments.createdAt));
}
