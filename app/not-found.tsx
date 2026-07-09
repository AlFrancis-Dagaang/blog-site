import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Dash } from "@/components/ui/Dash";

export default function NotFound() {
  return (
    <section className="py-12 md:py-20 border-t border-border-light bg-transparent min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 md:gap-6 mb-4 w-full">
            <Dash width="w-8 sm:w-16 md:w-24" className="shrink-0" />
            <h1 className="text-4xl sm:text-[52px] md:text-[64px] font-black text-primary-text font-sans leading-none md:whitespace-nowrap text-center">
              Page Not Found
            </h1>
            <Dash width="w-8 sm:w-16 md:w-24" className="shrink-0" />
          </div>
          <p className="text-lg font-normal text-muted mb-8 font-sans">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/"
              className="px-6 py-3 bg-brand text-white font-bold transition-colors hover:bg-brand-dark font-sans border border-brand"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
