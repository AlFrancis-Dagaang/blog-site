import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import type { Post } from "@/lib/db/schema";
import { posts } from "@/lib/db/schema";

export async function getAllPosts(): Promise<Post[]> {
  return db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
  return post;
}
