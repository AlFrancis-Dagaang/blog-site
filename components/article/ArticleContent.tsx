import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getStorageUrl } from "@/lib/storage";
import type { ArticlePost } from "./ArticleHeader";

interface ArticleContentProps {
  post: ArticlePost;
}

export function ArticleContent({ post }: ArticleContentProps) {
  return (
    <article className="pb-8 md:pb-16">
      {/* Cover Image */}
      <div className="relative w-full aspect-video md:aspect-2/1 overflow-hidden rounded-2xl mb-10 shadow-md">
        <Image
          src={getStorageUrl(post.coverImage)}
          alt={post.title}
          fill
          priority // Loads this image immediately since it's above the fold
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      {/* Body Content */}
      <div className="text-base md:text-lg text-primary-text dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>
    </article>
  );
}
