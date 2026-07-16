import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { FeaturedBlogsSection } from "@/components/home/featured-blogs/FeaturedBlogSection";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "A3 Blog",
  description:
    "Thoughts on full-stack engineering, cloud architecture, and building things with Java, React, and AWS.",
  openGraph: {
    title: "A3 Blog — Al Francis Daga-ang",
    description:
      "Writing on software engineering, cloud infrastructure, and lessons learned building real projects.",
  },
};

export default async function HomePage() {
  return (
    <Container>
      <Hero />
      <FeaturedBlogsSection />
      <About />
    </Container>
  );
}
