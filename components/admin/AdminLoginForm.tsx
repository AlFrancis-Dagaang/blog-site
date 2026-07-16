"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginAdmin } from "@/lib/auth/admin";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Strict Validation
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    const result = await loginAdmin(password);

    if (!result.success) {
      setError("Incorrect password.");
      setIsSubmitting(false);
      return;
    }

    router.refresh(); // re-runs admin/layout.tsx's server-side gate check
  }

  return (
    // FIXED: Adjusted the minimum height to better center dynamically on most screens
    <div className="min-h-[calc(100vh-100px)] w-full flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-4 gap-8 md:gap-16">
      {/* Left Side - Image Panel (Hidden on mobile) */}
      {/* FIXED: Changed max-w-112.5 to max-w-[450px] and aspect-4/3 to aspect-[4/3] */}
      <div className="hidden md:block relative w-full md:w-1/2 max-w-112.5 aspect-4/3 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
        <Image
          src="/images/admin/admin-landing-page.jpg"
          alt="Code background"
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-6xl font-bold mb-4 tracking-tight">
            A<span className="text-[#ff7a59]">3</span>
          </h1>
          <p className="text-base font-medium mb-6 max-w-xs leading-snug">
            My personal digital logbook documenting my step-by-step journey
            through cloud and software development.
          </p>
          <a
            href="/blog"
            className="text-sm font-semibold hover:underline flex items-center"
          >
            Explore the stories{" "}
            <span className="ml-2 mb-0.5" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>
      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 max-w-sm flex flex-col justify-center">
        {/* Info Notice Box */}
        <div className="border-l-[5px] border-[#ff7a59] bg-white dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 p-5 shadow-sm mb-8 text-sm leading-relaxed font-medium">
          Please log in with your administrative credentials to create and
          manage blog posts
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-text mb-2">
            Admin Login
          </h2>

          {/* Password Input Wrapper */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(null); // Clear error instantly when user types
              }}
              placeholder="Password"
              className={`w-full border rounded-md px-4 py-2.5 bg-gray-50 dark:bg-gray-800 text-primary-text focus:outline-none focus:ring-2 focus:ring-[#ff7a59] focus:border-transparent pr-12 transition-colors ${
                error
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              // biome-ignore lint/a11y/noAutofocus: <>
              autoFocus
            />

            {/* Show/Hide Password Eye Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                /* Eye Slash Icon */
                // biome-ignore lint/a11y/noSvgWithoutTitle: <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                /* Eye Open Icon */
                // biome-ignore lint/a11y/noSvgWithoutTitle: <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full bg-[#ff7a59] hover:bg-[#ff8f73] text-white font-semibold rounded-md px-4 py-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}
