import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { formatDateToPHT } from "@/lib/Utils";

// Define the shape of the post based on your Drizzle schema
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;
  body: string;
  createdAt: Date | string;
}

interface LatestArticleProps {
  post?: Post | null;
}

export function LatestArticle({ post }: LatestArticleProps) {
  if (!post) {
    return (
      <section className="py-16 md:pt-24 md:pb-12 bg-transparent">
        <Container>
          {/* Header Section remains so the page structure isn't lost */}
          <div className="mb-12 border-b-2 border-black dark:border-white pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text">
              A3<span className="text-brand">Blogs</span>
            </h2>
          </div>

          {/* Empty State UI */}
          <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50/50 dark:bg-gray-800/20">
            <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-2">
              No latest Article
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              There are currently no blog posts published. Check back later for
              new updates and articles!
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const formattedDate = formatDateToPHT(post.createdAt);

  return (
    <section className="py-16 md:pt-24 md:pb-12 bg-transparent">
      <Container>
        {/* 1. Header Section with Bottom Border */}
        <div className="mb-12 border-b-2 border-black dark:border-white pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text">
            A3 <span className="text-brand">Blogs</span>
          </h2>
        </div>

        {/* 2. Subtitle Label */}
        <h3 className="text-lg md:text-xl font-bold text-primary-text mb-6">
          Read my latest blog
        </h3>

        {/* 3. Article Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side: Cover Image */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-md">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col items-start space-y-3">
            {/* Date */}
            <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
              {formattedDate}
            </span>

            {/* Title */}
            <h4 className="text-2xl md:text-3xl font-extrabold text-primary-text leading-tight">
              {post.title}
            </h4>

            {/* Excerpt */}
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg line-clamp-3">
              {post.excerpt}
            </p>

            {/* Call to action (Hyperlink to blog/slug) */}
            <Link
              href={`/blog/${post.slug}`}
              className="text-brand font-medium hover:underline pt-2"
            >
              Read article
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
