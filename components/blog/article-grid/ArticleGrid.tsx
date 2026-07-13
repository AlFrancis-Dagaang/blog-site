import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArticleGridCard, type ArticlePost } from "./ArticleGridCard";

const CATEGORIES = [
  "All",
  "AWS Guides",
  "Projects",
  "Learning",
  "Certifications",
  "Community",
  "Career",
];

interface ArticleGridProps {
  posts: ArticlePost[];
  currentCategory: string;
}

export function ArticleGrid({ posts, currentCategory }: ArticleGridProps) {
  return (
    <section className="pt-12 pb-24 bg-transparent">
      <Container>
        {/* Header Area */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
            Feel free to navigate A<span className="text-brand">3</span> Blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            Explore my latest thoughts, tutorials, and experiences in cloud
            architecture, software engineering, and community building.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            // Build the URL. If "All" is clicked, remove the query param entirely.
            const href =
              cat === "All"
                ? "/blog"
                : `/blog?category=${encodeURIComponent(cat)}`;

            return (
              <Link
                key={cat}
                href={href}
                // Preserves scroll position when filtering
                scroll={false}
                className={`px-5 py-2 border border-brand transition-colors text-sm font-medium ${
                  isActive
                    ? "bg-brand/10 text-brand"
                    : "bg-transparent text-primary-text hover:bg-brand/5"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Articles List */}
        <div className="flex flex-col">
          {posts.length > 0 ? (
            posts.map((post) => <ArticleGridCard key={post.id} post={post} />)
          ) : (
            <div className="py-20 text-center ">
              <h3 className="text-xl font-bold text-primary-text mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                There are currently no posts in the "{currentCategory}"
                category.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
