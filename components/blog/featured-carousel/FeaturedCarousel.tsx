"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { FeaturedArticleCard, type FeaturedPost } from "./FeaturedArticleCard";

interface FeaturedCarouselProps {
  title: string;
  posts: FeaturedPost[];
}

export function FeaturedCarousel({ title, posts }: FeaturedCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll by 80% of the container width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!posts || posts.length < 3) return null;

  return (
    <section className="py-12 bg-transparent">
      <Container>
        {/* Header & Controls */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary-text">{title}</h2>

          {/* Arrow Buttons */}
          <div className="flex gap-3">
            {/** biome-ignore lint/a11y/useButtonType: < */}
            <button
              onClick={() => scroll("left")}
              className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
              <svg
                className="w-6 h-6"
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
            </button>
            {/** biome-ignore lint/a11y/useButtonType: <> */}
            <button
              onClick={() => scroll("right")}
              className="p-2 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition-colors focus:outline-none"
              aria-label="Scroll right"
            >
              {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post) => (
            <FeaturedArticleCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
