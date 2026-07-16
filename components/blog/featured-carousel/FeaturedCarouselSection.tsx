import { Suspense } from "react";
import { getPostsByCategories } from "@/lib/queries/posts"; // Adjust path as needed
import { FeaturedCarousel } from "./FeaturedCarousel";
import { FeaturedCarouselSkeleton } from "./FeaturedCarouselSkeleton";

async function FirstCarouselFetcher() {
  const posts = await getPostsByCategories(["Career"]);
  return <FeaturedCarousel title="Career" posts={posts} />;
}

async function SecondCarouselFetcher() {
  const posts = await getPostsByCategories(["Community"]);
  return <FeaturedCarousel title="Community" posts={posts} />;
}

export function FirstCarouselSection() {
  return (
    <Suspense fallback={<FeaturedCarouselSkeleton title="Career" />}>
      <FirstCarouselFetcher />
    </Suspense>
  );
}

export function SecondCarouselSection() {
  return (
    <Suspense fallback={<FeaturedCarouselSkeleton title="Community" />}>
      <SecondCarouselFetcher />
    </Suspense>
  );
}
