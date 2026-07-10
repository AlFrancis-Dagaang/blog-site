import Image from "next/image";
import Link from "next/link";
import { formatDateToPHT } from "@/lib/Utils"; // Adjust path as needed

export interface ArticlePost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;
  createdAt: Date | string;
}

interface ArticleGridCardProps {
  post: ArticlePost;
}

export function ArticleGridCard({ post }: ArticleGridCardProps) {
  const formattedDate = formatDateToPHT(post.createdAt);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center py-10 border-b border-gray-200 dark:border-gray-800 first:pt-0 last:border-0">
      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col items-start space-y-3 order-2 md:order-1 w-full">
        <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
          {formattedDate}
        </span>

        <h4 className="text-2xl md:text-3xl font-extrabold text-primary-text leading-tight">
          {post.title}
        </h4>

        <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-brand font-medium hover:underline pt-2"
        >
          Read article
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="relative w-full md:w-80 lg:w-100 aspect-3/2 shrink-0 overflow-hidden rounded-xl shadow-sm order-1 md:order-2">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
