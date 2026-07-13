import Link from "next/link";
export function ArticleSkeleton() {
  return (
    <main className="bg-transparent">
      {/* --- HEADER SKELETON --- */}
      <header className="pt-16 md:pt-24 pb-8">
        {/* Static Back Button (Matches real UI to prevent layout jumping) */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm md:text-base font-medium text-gray-500 mb-8 pointer-events-none"
        >
          {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to blogs
        </Link>

        {/* Pulsing Header Content */}
        <div className="animate-pulse">
          {/* Category */}
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-4" />

          {/* Title (2 large lines) */}
          <div className="space-y-3 mb-6">
            <div className="h-10 md:h-12 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-10 md:h-12 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          {/* Excerpt (2 smaller lines) */}
          <div className="space-y-2 mb-6">
            <div className="h-5 md:h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-5 md:h-6 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          {/* Author & Date Area + Static Divider */}
          <div className="pb-4 border-b-2 border-black dark:border-white">
            <div className="h-4 w-64 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </header>

      {/* --- CONTENT SKELETON --- */}
      <article className="pb-16">
        <div className="max-w-6xl mx-auto animate-pulse">
          {/* Cover Image Placeholder */}
          <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-2xl mb-12 shadow-sm" />

          {/* Paragraph Placeholders */}
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Paragraph 1 */}
            <div className="space-y-3">
              <div className="h-4 md:h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-3">
              <div className="h-4 md:h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-10/12 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            </div>

            {/* Paragraph 3 */}
            <div className="space-y-3">
              <div className="h-4 md:h-5 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 md:h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
