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

export async function getLatestPost(): Promise<Post | undefined> {
  const [post] = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.createdAt))
    .limit(1);

  return post;
}

export async function getPostsByCategory(
  category: string,
): Promise<Array<Omit<Post, "body">>> {
  return db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      excerpt: posts.excerpt,
      category: posts.category,
      coverImage: posts.coverImage,
      createdAt: posts.createdAt,
    })
    .from(posts)
    .where(eq(posts.category, category))
    .orderBy(desc(posts.createdAt));
}
