export function AdminGateSkeleton() {
  return (
    <div className="min-h-[calc(100vh-100px)] w-full flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-4 gap-8 md:gap-16">
      {/* Left Side - Image Panel Skeleton (Hidden on mobile) */}
      <div className="hidden md:block relative w-full md:w-1/2 max-w-112.5 aspect-4/3 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800/50 animate-pulse">
        {/* Overlay Text Skeleton positioned at the bottom left */}
        <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
          {/* H1 Placeholder */}
          <div className="h-14 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-4" />

          {/* Paragraph Placeholder */}
          <div className="space-y-3 mb-6">
            <div className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          {/* Link Placeholder */}
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>

      {/* Vertical Divider Skeleton (Hidden on mobile) */}
      <div className="hidden md:block w-0.5 bg-gray-200 dark:bg-gray-700 h-72 rounded-full opacity-90 animate-pulse" />

      {/* Right Side - Form Skeleton */}
      <div className="w-full md:w-1/2 max-w-sm flex flex-col justify-center animate-pulse">
        {/* Info Notice Box Skeleton */}
        <div className="border-l-[5px] border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 p-5 shadow-sm mb-8">
          <div className="space-y-2.5">
            <div className="h-3.5 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3.5 w-11/12 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3.5 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* Form Area Skeleton */}
        <div className="flex flex-col gap-4">
          {/* Header Placeholder */}
          <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-2" />

          {/* Input Placeholder */}
          <div className="h-11.5 w-full bg-gray-200 dark:bg-gray-700 rounded-md" />

          {/* Button Placeholder */}
          <div className="mt-2 h-11 w-full bg-gray-200 dark:bg-gray-700 rounded-md" />
        </div>
      </div>
    </div>
  );
}
