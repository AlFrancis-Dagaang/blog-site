import { Suspense } from "react";
import { FeaturedArticleCard } from "@/components/blog/featured-carousel/FeaturedArticleCard";
import { getPostBySlug, getRecommendedPosts } from "@/lib/queries/posts";
import { RecommendationSkeleton } from "./RecommendationSkeleton";

interface RecommendationSectionProps {
  paramsPromise: Promise<{ slug: string }>;
}

export function RecommendationSection({
  paramsPromise,
}: RecommendationSectionProps) {
  return (
    <Suspense fallback={<RecommendationSkeleton />}>
      <RecommendationList paramsPromise={paramsPromise} />
    </Suspense>
  );
}

async function RecommendationList({
  paramsPromise,
}: RecommendationSectionProps) {
  const { slug } = await paramsPromise;
  const currentPost = await getPostBySlug(slug);

  if (!currentPost) return null;

  const recommendations = await getRecommendedPosts(currentPost.slug, 3);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-16 mb-16">
      <h3 className="text-2xl font-bold text-primary-text mb-6">
        You May Also Like
      </h3>

      <div className="flex flex-wrap gap-6">
        {recommendations.map((post) => (
          <FeaturedArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
