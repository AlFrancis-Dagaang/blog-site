import { Container } from "@/components/layout/Container";

export function LatestArticleSkeleton() {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <Container>
        {/* 1. Static Header - Matches the loaded state to prevent layout shift */}
        <div className="mb-12 border-b-2 border-black dark:border-white pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text">
            A3 <span className="text-brand">Blogs</span>
          </h2>
        </div>

        {/* 2. Static Subtitle */}
        <h3 className="text-lg md:text-xl font-bold text-primary-text mb-6">
          Read my latest blog
        </h3>

        {/* 3. Pulsing Skeleton Grid for Dynamic Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-pulse">
          {/* Left Side: Image Placeholder */}
          <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-2xl shadow-md" />

          {/* Right Side: Text Content Placeholder */}
          <div className="flex flex-col items-start space-y-4 w-full">
            {/* Date */}
            <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded" />

            {/* Title (2 lines to simulate a typical blog title) */}
            <div className="space-y-2 w-full">
              <div className="h-8 md:h-10 w-full max-w-md bg-gray-300 dark:bg-gray-700 rounded-md" />
              <div className="h-8 md:h-10 w-3/4 max-w-sm bg-gray-300 dark:bg-gray-700 rounded-md" />
            </div>

            {/* Excerpt (3 lines matching the line-clamp-3) */}
            <div className="space-y-2 w-full pt-2">
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>

            {/* Call to action link */}
            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded mt-2" />
          </div>
        </div>
      </Container>
    </section>
  );
}
