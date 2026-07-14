export function CommentDrawerSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="pb-6 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col space-y-2 mb-3">
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
