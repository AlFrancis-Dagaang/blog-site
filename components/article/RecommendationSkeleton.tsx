export function RecommendationSkeleton() {
  return (
    <section className="mt-16">
      <div className="h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse" />
      <div className="flex flex-wrap gap-6">
        {[0, 1].map((i) => (
          <div key={i} className="flex-1 min-w-70">
            <div className="w-full aspect-3/2 rounded-2xl bg-gray-200 dark:bg-gray-700 animate-pulse mb-4" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}
