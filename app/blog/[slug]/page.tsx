import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/article/article-content";
import { ArticleHeader } from "@/components/article/article-header";
import { Container } from "@/components/layout/Container";
import { getPostBySlug } from "@/lib/queries/posts";

type SingleArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SingleArticlePage({
  params,
}: SingleArticlePageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-transparent">
      <Container>
        <ArticleHeader post={post} />
        <ArticleContent post={post} />
      </Container>
    </main>
  );
}
