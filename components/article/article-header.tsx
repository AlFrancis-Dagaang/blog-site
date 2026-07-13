import Link from "next/dist/client/link";
import { formatDateToPHT } from "@/lib/Utils";

// Shared interface for the post based on your Drizzle schema
export interface ArticlePost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;
  body: string;
  createdAt: Date | string;
}

interface ArticleHeaderProps {
  post: ArticlePost;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const formattedDate = formatDateToPHT(post.createdAt);

  return (
    <header className="pt-16 md:pt-24 pb-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm md:text-base font-medium text-gray-500 hover:text-brand dark:text-gray-400 dark:hover:text-brand transition-colors mb-8"
        >
          {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to blogs
        </Link>
        {/* Category */}
        <span className="text-gray-500 dark:text-gray-400 font-medium text-sm md:text-base mb-3 block">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-text leading-tight mb-4">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          {post.excerpt}
        </p>

        {/* Author, Date, and Divider */}
        <div className="text-sm md:text-base text-primary-text dark:text-gray-200 font-medium pb-4 border-b-2 border-black dark:border-white">
          Al Francis Daga-ang <span className="mx-2 font-bold">•</span>{" "}
          {formattedDate}
        </div>
      </div>
    </header>
  );
}
