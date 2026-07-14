import { ArticleGridSkeleton } from "@/components/blog/article-grid/ArticleGridSkeleton";
import { FeaturedCarouselSkeleton } from "@/components/blog/featured-carousel/FeaturedCarouselSkeleton";
import { LatestArticleSkeleton } from "@/components/blog/latest-article/LatestArticleSkeleton";

export default function BlogLoading() {
  return (
    <main>
      <LatestArticleSkeleton />
      <FeaturedCarouselSkeleton title="AWS Features" />
      <FeaturedCarouselSkeleton title="Projects" />
      <ArticleGridSkeleton currentCategory={"All"} />
    </main>
  );
}
