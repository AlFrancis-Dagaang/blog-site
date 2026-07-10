import { Container } from "@/components/layout/Container";

interface FeaturedCarouselSkeletonProps {
  title: string;
}

export function FeaturedCarouselSkeleton({
  title,
}: FeaturedCarouselSkeletonProps) {
  return (
    <section className="py-0 bg-transparent animate-pulse">
      <Container>
        {/* Header & Controls Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary-text">{title}</h2>
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-md" />
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-md" />
          </div>
        </div>

        {/* Cards Skeleton Grid (shows 3 cards) */}
        <div className="flex gap-4 md:gap-8 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
            >
              <div className="w-full aspect-3/2 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                  <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
                </div>
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mt-2" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
