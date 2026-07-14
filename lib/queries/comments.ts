import { count, desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import type { Comment } from "@/lib/db/schema";
import { comments } from "@/lib/db/schema";

export async function getCommentsByPostId(
  postId: string,
  limit?: number,
): Promise<Comment[]> {
  const query = db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))
    .orderBy(desc(comments.createdAt));

  if (limit) {
    return query.limit(limit);
  }

  return query;
}

export async function getCommentCountByPostId(postId: string): Promise<number> {
  const result = await db
    .select({ count: count() })
    .from(comments)
    .where(eq(comments.postId, postId));

  return result[0]?.count ?? 0;
}
