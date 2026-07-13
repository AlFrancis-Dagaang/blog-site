import { getCommentsByPostId } from "@/lib/queries/comments";
import {
  getAllPosts,
  getLatestPost,
  getPostBySlug,
  getPostsByCategories,
} from "@/lib/queries/posts";

async function test() {
  const latest = await getLatestPost();
  console.log("Latest post:", latest?.title);

  const all = await getAllPosts();
  console.log(
    "All posts (should be same order, latest first):",
    all.map((p) => p.title),
  );

  // Single category test
  const singleCategory = ["Learning"];
  const singleCategoryPosts = await getPostsByCategories(singleCategory);
  console.log("\nSingle category filter:", singleCategory);
  console.log("Count:", singleCategoryPosts.length);
  console.log(
    "Titles:",
    singleCategoryPosts.map((post) => post.title),
  );

  // Multi-category test
  const multiCategories = ["Learning", "Projects"];
  const multiCategoryPosts = await getPostsByCategories(multiCategories);
  console.log("\nMulti category filter:", multiCategories);
  console.log("Count:", multiCategoryPosts.length);
  console.log(
    "Titles:",
    multiCategoryPosts.map((post) => post.title),
  );

  // Empty array = "All" test
  const allViaEmpty = await getPostsByCategories([]);
  console.log("\nEmpty array (should return all posts):");
  console.log("Count:", allViaEmpty.length);

  if (all.length > 0) {
    const bySlug = await getPostBySlug(all[0].slug);
    console.log("\nPost by slug:", bySlug?.title);

    const comments = await getCommentsByPostId(all[0].id);
    console.log("Comments:", comments);
  }
}

test().then(() => process.exit(0));
