export default function Loading() {
  return (
    <div className="animate-pulse space-y-24 py-16">
      {/* Hero Skeleton */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 rounded-xl" />
        <div className="space-y-4">
          <div className="h-8 w-full bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        </div>
      </section>

      {/* Featured Blogs Skeleton */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 mx-auto mb-8 rounded" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
          <div className="flex flex-col gap-3">
            <div className="h-60 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        </div>
      </div>

      {/* About Skeleton */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="h-32 w-full bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </div>
        <div className="h-80 w-full bg-gray-200 dark:bg-gray-800 rounded-3xl" />
      </section>
    </div>
  );
}
