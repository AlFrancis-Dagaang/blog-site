import { desc, eq, inArray } from "drizzle-orm";
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

export async function getPostsByCategories(
  categories: string[],
): Promise<Array<Omit<Post, "body">>> {
  const baseSelect = db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      excerpt: posts.excerpt,
      category: posts.category,
      coverImage: posts.coverImage,
      createdAt: posts.createdAt,
    })
    .from(posts);

  if (categories.length === 0) {
    // "All" selected (or nothing selected) — return everything
    return baseSelect.orderBy(desc(posts.createdAt));
  }

  return baseSelect
    .where(inArray(posts.category, categories))
    .orderBy(desc(posts.createdAt));
}
