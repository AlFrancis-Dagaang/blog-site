// components/comments/CommentListSection.tsx
import { Suspense } from "react";
import {
  getCommentCountByPostId,
  getCommentsByPostId,
} from "@/lib/queries/comments";
import { getPostBySlug } from "@/lib/queries/posts";
import { CommentDrawer } from "./CommentDrawer";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { CommentListSkeleton } from "./CommentListSkeleton";

interface CommentListSectionProps {
  paramsPromise: Promise<{ slug: string }>;
}

async function CommentsDataFetcher({ paramsPromise }: CommentListSectionProps) {
  const { slug } = await paramsPromise;
  const post = await getPostBySlug(slug);

  if (!post) {
    return null; // ArticleSection already owns notFound(), no need to duplicate
  }

  const [previewComments, totalComments] = await Promise.all([
    getCommentsByPostId(post.id, 3),
    getCommentCountByPostId(post.id),
  ]);

  return (
    <section className="py-12 border-t border-black dark:border-white">
      <h3 className="text-2xl text-primary-text mb-6">
        Responses (<span className="text-[#ff7a59]">{totalComments}</span>)
      </h3>

      <CommentForm postId={post.id} slug={slug} />

      <CommentList comments={previewComments} />

      {totalComments > 3 && (
        <CommentDrawer postId={post.id} totalComments={totalComments} />
      )}
    </section>
  );
}

export function CommentListSection({ paramsPromise }: CommentListSectionProps) {
  return (
    <Suspense fallback={<CommentListSkeleton />}>
      <CommentsDataFetcher paramsPromise={paramsPromise} />
    </Suspense>
  );
}
