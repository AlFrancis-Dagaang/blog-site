import { ArticleGridSection } from "@/components/blog/article-grid/ArticleGridSection";
import {
  AwsCarouselSection,
  ProjectsCarouselSection,
} from "@/components/blog/featured-carousel/FeaturedCarouselSection";
import { LatestArticleSection } from "@/components/blog/latest-article/LatestArticleSection";
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main>
      <LatestArticleSection />
      <AwsCarouselSection />
      <ProjectsCarouselSection />
      <ArticleGridSection searchParams={searchParams} />
    </main>
  );
}
