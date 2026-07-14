export function CommentListSkeleton() {
  return (
    <section className="py-12 border-t border-gray-300 dark:border-gray-700">
      {/* Header */}
      <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded mb-6" />

      {/* Form Skeleton */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-5 w-9 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
        <div className="h-32 w-full bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700" />
      </div>

      {/* Initial 3 Comments Skeleton */}
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="pb-6 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded mb-2" />
            <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
