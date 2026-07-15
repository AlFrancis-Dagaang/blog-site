import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { ArticleGridSection } from "@/components/blog/article-grid/ArticleGridSection";
import {
  AwsCarouselSection,
  ProjectsCarouselSection,
} from "@/components/blog/featured-carousel/FeaturedCarouselSection";
import { LatestArticleSection } from "@/components/blog/latest-article/LatestArticleSection";

export const metadata: Metadata = {
  title: "A3 Blogs",
  description:
    "Thoughts on full-stack engineering, cloud architecture, and building things with Java, React, and AWS.",
  openGraph: {
    title: "A3 Blogs — Al Francis Daga-ang",
    description:
      "Writing on software engineering, cloud infrastructure, and lessons learned building real projects.",
  },
};

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
