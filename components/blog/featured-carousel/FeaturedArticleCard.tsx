import Image from "next/image";
import Link from "next/link";
import { formatDateToPHT } from "@/lib/Utils";

export interface FeaturedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;
  createdAt: Date | string;
}

interface FeaturedArticleCardProps {
  post: FeaturedPost;
}

export function FeaturedArticleCard({ post }: FeaturedArticleCardProps) {
  const formattedDate = formatDateToPHT(post.createdAt);

  return (
    <div className="flex flex-col flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start group">
      {/* Image */}
      <div className="relative w-full aspect-3/2 overflow-hidden rounded-2xl mb-4">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start space-y-2 grow">
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {formattedDate}
        </span>

        <h4 className="text-xl font-bold text-primary-text leading-tight line-clamp-2">
          {post.title}
        </h4>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-2 grow">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-brand font-medium text-sm hover:underline mt-auto"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
