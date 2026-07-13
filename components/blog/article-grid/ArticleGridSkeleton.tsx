import { Container } from "@/components/layout/Container";

const CATEGORIES = [
  "All",
  "AWS Guides",
  "Projects",
  "Learning",
  "Certifications",
  "Community",
  "Career",
];

interface ArticleGridSkeletonProps {
  currentCategory: string;
}

export function ArticleGridSkeleton({
  currentCategory,
}: ArticleGridSkeletonProps) {
  return (
    <section className="pt-16 pb-24 bg-transparent">
      <Container>
        {/* Static Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
            Feel free to navigate A<span className="text-brand">3</span> Blogs
          </h2>
          <div className="space-y-2 max-w-2xl animate-pulse">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* Static Filter Buttons (matches active state during load) */}
        <div className="flex flex-wrap gap-3 mb-16">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <div
                key={cat}
                className={`px-5 py-2 border border-brand text-sm font-medium ${
                  isActive
                    ? "bg-brand/10 text-brand"
                    : "bg-transparent text-primary-text"
                }`}
              >
                {cat}
              </div>
            );
          })}
        </div>

        {/* Pulsing Article Cards Skeleton */}
        <div className="flex flex-col animate-pulse">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center py-10 border-b border-gray-200 dark:border-gray-800 first:pt-0 last:border-0"
            >
              {/* Left: Text Skeleton */}
              <div className="flex-1 flex flex-col items-start space-y-4 order-2 md:order-1 w-full">
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="space-y-2 w-full">
                  <div className="h-8 w-full max-w-md bg-gray-300 dark:bg-gray-700 rounded" />
                  <div className="h-8 w-3/4 max-w-sm bg-gray-300 dark:bg-gray-700 rounded" />
                </div>
                <div className="space-y-2 w-full pt-2">
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
                </div>
                <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded mt-2" />
              </div>

              {/* Right: Image Skeleton */}
              <div className="w-full md:w-80 lg:w-100 aspect-3/2 shrink-0 bg-gray-300 dark:bg-gray-700 rounded-xl order-1 md:order-2" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
