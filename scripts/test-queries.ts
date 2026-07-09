// scripts/test-queries.ts

import { getCommentsByPostId } from "@/lib/queries/comments";
import {
  getAllPosts,
  getLatestPost,
  getPostBySlug,
  getPostsByCategory,
} from "@/lib/queries/posts";

async function test() {
  const latest = await getLatestPost();
  console.log("Latest post:", latest);

  const all = await getAllPosts();
  console.log(
    "All posts (should be same order, latest first):",
    all.map((p) => p.title),
  );

  const category = "Learning"; // replace with an existing category
  const categoryPosts = await getPostsByCategory(category);

  console.log("Posts in category:", category);
  console.log("Count:", categoryPosts.length);
  console.log(
    "Titles:",
    categoryPosts.map((post) => post.title),
  );

  if (all.length > 0) {
    const bySlug = await getPostBySlug(all[0].slug);
    console.log("Post by slug:", bySlug?.title);

    const comments = await getCommentsByPostId(all[0].id);
    console.log("Comments:", comments);
  }
}

test().then(() => process.exit(0));
