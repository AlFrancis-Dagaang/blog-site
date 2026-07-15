import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { ArticleSection } from "@/components/article/ArticleSection";
import { RecommendationSection } from "@/components/article/RecommendationSection";
import { CommentListSection } from "@/components/comment/CommentListSection";
import { Container } from "@/components/layout/Container";
import { getAllPosts, getPostBySlug } from "@/lib/queries/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title ?? slugToTitle(slug);
  const description = post?.excerpt ?? "Read this post on A3 Blogs.";

  return {
    title: `${title} — A3`,
    description,
    openGraph: {
      title: `${title} — A3 Blogs — Al Francis Daga-ang`,
      description,
    },
  };
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
        <RecommendationSection paramsPromise={params} />
      </Container>
    </main>
  );
}
