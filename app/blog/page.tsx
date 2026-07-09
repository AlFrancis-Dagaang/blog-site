import { LatestArticle } from "@/components/blog/LatestArticle";
import { getLatestPost } from "@/lib/queries/posts";

export default async function BlogPage() {
  const latestPost = await getLatestPost();

  return (
    <main>
      <LatestArticle post={latestPost} />
    </main>
  );
}
