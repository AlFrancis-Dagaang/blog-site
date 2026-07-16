export function FeaturedBlogsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 mx-auto mb-8 rounded" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
        <div className="flex flex-col gap-3">
          <div className="h-60 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-6 w-full bg-gray-200 dark:bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  );
}
