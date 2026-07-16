import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="w-full py-8 bg-transparent ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            About A3
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            A3 (Al's AWS Archive) is my personal knowledge base where I document
            my journey in cloud engineering, software development, and
            continuous learning.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            I created A3 to document what I learn, build, and experience
            throughout my software engineering journey. Every article is based
            on firsthand experience—from AWS labs and certifications to
            internships, hackathons, projects, and cloud leadership. My goal is
            to build a practical knowledge archive that reflects my growth while
            helping others learn along the way.
          </p>

          <Link
            href="https://alfrancisdagaang-dev.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-fit px-8 py-4 bg-[#ff7a59] hover:bg-[#ff8f73] text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Meet the Author
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

        {/* Right: Author Image & Name */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/home/graduation-photo.jpg"
              alt="Al Francis Daga-ang"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 font-medium">Author</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Al Francis Daga-ang
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
