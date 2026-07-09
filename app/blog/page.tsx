import { Suspense } from "react";
import { LatestArticle } from "@/components/blog/LatestArticle";
import { getLatestPost } from "@/lib/queries/posts";

async function LatestArticleSection() {
  const latestPost = await getLatestPost();
  return <LatestArticle post={latestPost} />;
}

export default function BlogPage() {
  return (
    <main>
      <Suspense
        fallback={<div className="animate-pulse h-96 bg-skeleton rounded-lg" />}
      >
        <LatestArticleSection />
      </Suspense>
    </main>
  );
}
