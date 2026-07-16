import Link from "next/link";

export function Hero() {
  return (
    <section className="py-16 md:py-24 border-b-3 border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading */}
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Al's
            <span className="block text-[#ff7a59]">AWS</span>
            Archive
          </h1>
        </div>

        {/* Right: Description & CTA */}
        <div className="flex flex-col gap-6 md:justify-center">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
            Follow my journey from student to software engineer through
            certifications, projects, leadership, and technical articles.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 w-full md:w-fit px-8 py-4 bg-[#ff7a59] hover:bg-[#ff8f73] text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Read Blogs
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
