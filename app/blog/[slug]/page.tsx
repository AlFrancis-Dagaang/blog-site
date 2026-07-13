import { ArticleSection } from "@/components/article/ArticleSection";
import { CommentListSection } from "@/components/comment/CommentListSection";
import { Container } from "@/components/layout/Container";
import { getAllPosts } from "@/lib/queries/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function SingleArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="bg-transparent">
      <Container maxWidth="max-w-4xl">
        <ArticleSection paramsPromise={params} />
        <CommentListSection paramsPromise={params} />
      </Container>
    </main>
  );
}
