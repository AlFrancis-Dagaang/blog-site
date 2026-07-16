import { Suspense } from "react";
import { getPostBySlug } from "@/lib/queries/posts";
import { FeaturedBlogs } from "./FeaturedBlogs";
import { FeaturedBlogsSkeleton } from "./FeaturedBlogsSkeleton";

const FEATURED_SLUGS = [
  "our-hackathon-journey-top-5",
  "everything-is-an-object",
];

async function FeaturedBlogsContent() {
  const posts = await Promise.all(
    FEATURED_SLUGS.map((slug) => getPostBySlug(slug)),
  );

  const validPosts = posts.filter((p): p is NonNullable<typeof p> => !!p);

  // If NO posts are found, show the empty state
  if (validPosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50/50 dark:bg-gray-800/20">
        <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-2">
          No Featured Article
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          There are currently no blog posts published. Check back later for new
          updates and articles!
        </p>
      </div>
    );
  }

  return <FeaturedBlogs posts={validPosts} />;
}

export function FeaturedBlogsSection() {
  return (
    <Suspense fallback={<FeaturedBlogsSkeleton />}>
      <FeaturedBlogsContent />
    </Suspense>
  );
}
