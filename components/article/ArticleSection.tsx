// components/article/article-section.tsx

import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPostBySlug } from "@/lib/queries/posts";
import { ArticleContent } from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleSkeleton } from "./ArticleSkeleton";

async function ArticleFetcher({
  paramsPromise,
}: {
  paramsPromise: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise; // dynamic access now happens INSIDE Suspense
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleHeader post={post} />
      <ArticleContent post={post} />
    </>
  );
}

export function ArticleSection({
  paramsPromise,
}: {
  paramsPromise: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ArticleSkeleton />}>
      <ArticleFetcher paramsPromise={paramsPromise} />
    </Suspense>
  );
}
