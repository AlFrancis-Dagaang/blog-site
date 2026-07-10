import { Suspense } from "react";
import { getPostsByCategories } from "@/lib/queries/posts"; // Adjust path as needed
import { ArticleGrid } from "./ArticleGrid";
import { ArticleGridSkeleton } from "./ArticleGridSkeleton";

type SearchParamsPromise = Promise<{
  [key: string]: string | string[] | undefined;
}>;

interface ArticleGridSectionProps {
  searchParams: SearchParamsPromise;
}

async function GridFetcher({ searchParams }: ArticleGridSectionProps) {
  // 1. Await the searchParams INSIDE the Suspense boundary
  const resolvedParams = await searchParams;
  const category =
    typeof resolvedParams.category === "string"
      ? resolvedParams.category
      : "All";

  // 2. Fetch the data based on the resolved category
  const categoriesToFetch = category === "All" ? [] : [category];
  const posts = await getPostsByCategories(categoriesToFetch);

  // 3. Render the UI
  return <ArticleGrid posts={posts} currentCategory={category} />;
}

export function ArticleGridSection({ searchParams }: ArticleGridSectionProps) {
  return (
    // The fallback uses "All" since we don't know the exact category until the promise resolves.
    // This instantly streams the skeleton to the screen!
    <Suspense fallback={<ArticleGridSkeleton currentCategory="All" />}>
      <GridFetcher searchParams={searchParams} />
    </Suspense>
  );
}
