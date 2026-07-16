import Image from "next/image";
import Link from "next/link";
import { getStorageUrl } from "@/lib/storage";
import { formatDateToPHT } from "@/lib/Utils";

// biome-ignore lint/suspicious/noExplicitAny: <>
export function FeaturedBlogs({ posts }: { posts: any[] }) {
  const [mainPost, ...sidePosts] = posts;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-500 mb-8 text-center">
        Featured Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Post: Takes full width if sidePost is missing */}
        {mainPost && (
          <Link
            href={`/blog/${mainPost.slug}`}
            className={`${
              sidePosts.length > 0 ? "md:col-span-2" : "md:col-span-3"
            } group relative h-96 rounded-2xl overflow-hidden`}
          >
            <Image
              src={getStorageUrl(mainPost.coverImage)}
              alt={mainPost.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold mb-2">
                {mainPost.title}
              </h3>
              <p className="text-gray-200 line-clamp-2">{mainPost.excerpt}</p>
            </div>
          </Link>
        )}

        {/* Side Post: Only renders if it exists */}
        {sidePosts[0] && (
          <Link
            href={`/blog/${sidePosts[0].slug}`}
            className="flex flex-col gap-3"
          >
            <div className="relative h-60 rounded-2xl overflow-hidden">
              <Image
                src={getStorageUrl(sidePosts[0].coverImage)}
                alt={sidePosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-gray-500 text-sm">
              {formatDateToPHT(sidePosts[0].createdAt)}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {sidePosts[0].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
              {sidePosts[0].excerpt}
            </p>
          </Link>
        )}
      </div>
    </section>
  );
}
