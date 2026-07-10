import { Suspense } from "react";
import { getLatestPost } from "@/lib/queries/posts";
import { LatestArticle } from "./LatestArticle";
import { LatestArticleSkeleton } from "./LatestArticleSkeleton";

async function LatestArticleContent() {
  const post = await getLatestPost();
  return <LatestArticle post={post} />;
}

export function LatestArticleSection() {
  return (
    <Suspense fallback={<LatestArticleSkeleton />}>
      <LatestArticleContent />
    </Suspense>
  );
}
