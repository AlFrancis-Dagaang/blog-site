import { Suspense } from "react";
import { getPostsByCategories } from "@/lib/queries/posts"; // Adjust path as needed
import { FeaturedCarousel } from "./FeaturedCarousel";
import { FeaturedCarouselSkeleton } from "./FeaturedCarouselSkeleton";

async function AwsCarouselFetcher() {
  const posts = await getPostsByCategories(["AWS Guides"]);
  return <FeaturedCarousel title="AWS Guides" posts={posts} />;
}

async function ProjectsCarouselFetcher() {
  const posts = await getPostsByCategories(["Projects"]);
  return <FeaturedCarousel title="Projects" posts={posts} />;
}

export function AwsCarouselSection() {
  return (
    <Suspense fallback={<FeaturedCarouselSkeleton title="AWS Guides" />}>
      <AwsCarouselFetcher />
    </Suspense>
  );
}

export function ProjectsCarouselSection() {
  return (
    <Suspense fallback={<FeaturedCarouselSkeleton title="Projects" />}>
      <ProjectsCarouselFetcher />
    </Suspense>
  );
}
