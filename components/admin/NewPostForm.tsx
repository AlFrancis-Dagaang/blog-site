"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { useTheme } from "@/components/ui/theme";
import { type ActionState, createPost } from "@/lib/actions/posts";
import { logoutAdmin } from "@/lib/auth/admin";

const CATEGORIES = [
  "AWS Guides",
  "Projects",
  "Learning",
  "Certifications",
  "Community",
  "Career",
];

export function NewPostForm() {
  useEffect(() => {
    console.log("Form component just mounted");
    return () => console.log("Form component just unmounted");
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(createPost, {
    status: "idle",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

  // Handle local image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("Select Category");
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
  });

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  async function handleLogout() {
    await logoutAdmin();
    router.push("/admin");
    router.refresh();
  }

  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const [postUrl, setPostUrl] = useState("");

  useEffect(() => {
    if (state.status === "success" && "slug" in state) {
      setIsBannerDismissed(false);
      setPostUrl(`${window.location.origin}/blog/${state.slug}`);

      formRef.current?.reset(); // Clears the file input

      setForm({
        title: "",
        excerpt: "",
        content: "",
      });

      setImagePreview(null);
      setActiveCategory("Select Category");
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="min-h-screen bg-[#f4f4f5] dark:bg-surface flex flex-col font-sans"
    >
      {/* Admin Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#00212e]/80 backdrop-blur-md border-b border-border-light shadow-sm">
        {/* TOP BAR CONTENT */}
        <Container>
          <div className="flex h-16 items-center justify-between w-full">
            {/* Left Side: Admin Greeting */}
            <div className="flex flex-col leading-tight">
              <span className="text-xs md:text-sm font-medium text-gray-400 dark:text-gray-500">
                Admin
              </span>
              <span className="text-xl md:text-2xl font-bold text-primary-text">
                Hello <span className="text-brand">Al Francis</span>
              </span>
            </div>

            {/* Right Side: Controls */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Publish Button (Always Visible) */}
              <button
                type="submit"
                disabled={isPending}
                className="px-5 py-1.5 bg-[#ff7a59] hover:bg-[#ff8f73] text-white text-sm font-bold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Publishing..." : "Publish"}
              </button>

              {/* Desktop Only Controls */}
              <div className="hidden md:flex items-center gap-6">
                {/* Theme Toggle */}
                <button
                  type="button"
                  onClick={toggle}
                  aria-label="Toggle dark mode"
                  className="flex items-center gap-3 focus:outline-none group"
                >
                  <div
                    className={`w-11 h-5 rounded-full border-2 flex items-center px-0.5 transition-colors duration-300 ${
                      theme === "dark" ? "border-gray-400" : "border-gray-600"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                        theme === "dark"
                          ? "bg-gray-400 translate-x-6"
                          : "bg-gray-600 translate-x-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Logout Icon */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  title="Log out"
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
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Hamburger Icon */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-md text-primary-text md:hidden"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="w-full border-t border-border-light bg-white dark:bg-[#00212e] md:hidden">
            <Container>
              <div className="space-y-4 py-4 flex flex-col">
                {/* Theme Toggle — Mobile */}
                <button
                  type="button"
                  onClick={toggle}
                  aria-label="Toggle dark mode"
                  className="flex items-center justify-between w-full focus:outline-none group"
                >
                  <span className="text-sm font-medium text-primary-text">
                    Appearance
                  </span>
                  {/* Pill Switch */}
                  <div
                    className={`w-11 h-5 rounded-full border-2 flex items-center px-0.5 transition-colors duration-300 ${
                      theme === "dark" ? "border-gray-400" : "border-gray-600"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                        theme === "dark"
                          ? "bg-gray-400 translate-x-6"
                          : "bg-gray-600 translate-x-0"
                      }`}
                    />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center justify-between w-full text-red-500 hover:text-red-600 transition-colors"
                >
                  <span className="text-sm font-medium">Log out</span>
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
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            </Container>
          </div>
        )}
      </nav>

      {/* Form Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 md:py-16 flex flex-col gap-6">
        {state.status === "error" && state.errors?._form && (
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md text-sm font-medium">
            {state.errors._form[0]}
          </div>
        )}

        {/* NEW: Success Banner */}
        {state.status === "success" && !isBannerDismissed && (
          <div className="relative bg-white dark:bg-[#052e3e] shadow-sm border border-gray-100 dark:border-gray-800 p-6 mb-2 flex flex-col gap-3">
            {/* Close Button Icon */}
            <button
              type="button"
              onClick={() => setIsBannerDismissed(true)}
              className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors focus:outline-none"
              aria-label="Close banner"
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-[#21da00] text-2xl font-bold tracking-wide">
              Successfully posted !
            </h3>

            <p className="text-primary-text font-medium text-base">
              Visit the post:{" "}
              <a
                href={postUrl}
                target="_blank"
                rel="noopener noreferrer"
                // Removed hover:underline, added hover:text-brand and transition-colors
                className="text-black dark:text-gray-300 font-normal hover:text-brand transition-colors"
              >
                {postUrl}
              </a>
            </p>
          </div>
        )}

        {/* Category Dropdown (Custom) */}
        <div className="flex flex-col relative z-40 mb-2">
          {/* Hidden input to ensure 'category' is sent with FormData on submit */}
          <input
            type="hidden"
            name="category"
            value={activeCategory === "Select Category" ? "" : activeCategory}
          />

          <div className="relative w-full md:w-72">
            <button
              type="button"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full flex justify-between items-center bg-transparent border-b-2 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 py-2 uppercase tracking-wider focus:outline-none focus:border-[#ff7a59] transition-all"
            >
              {activeCategory}
              <svg
                aria-hidden="true"
                className={`w-6 h-6 text-brand transition-transform duration-200 ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#052e3e] border-2 border-border-light rounded-2xl shadow-xl overflow-hidden">
                {CATEGORIES.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsCategoryOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3.5 uppercase tracking-wider hover:bg-[#ff7a59]/10 transition-colors ${
                      activeCategory === category
                        ? "text-[#ff7a59] bg-[#ff7a59]/5"
                        : "text-primary-text"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Validation Error Message */}
          {state.status === "error" && state.errors?.category && (
            <span className="text-red-500 text-sm mt-2">
              {state.errors.category[0]}
            </span>
          )}
        </div>

        {/* Title Input */}
        <div className="flex flex-col">
          <textarea
            name="title"
            value={form.title}
            placeholder="Blog title here"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            className="w-full bg-transparent text-4xl md:text-5xl font-extrabold text-primary-text placeholder:text-black dark:placeholder:text-white focus:outline-none resize-none overflow-hidden leading-tight py-2"
          />
          {state.status === "error" && state.errors?.title && (
            <span className="text-red-500 text-sm mt-2">
              {state.errors.title[0]}
            </span>
          )}
        </div>

        {/* Excerpt Input */}
        <div className="flex flex-col mb-4">
          <textarea
            name="excerpt"
            placeholder="A brief summary"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
            className="w-full bg-transparent text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none resize-none overflow-hidden leading-snug py-2"
          />
          {state.status === "error" && state.errors?.excerpt && (
            <span className="text-red-500 text-sm mt-2">
              {state.errors.excerpt[0]}
            </span>
          )}
        </div>

        {/* Uncontrolled Image Upload Field */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="image-upload"
            className="relative flex flex-col items-center justify-center w-full aspect-video md:aspect-2.5/1 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors overflow-hidden group"
          >
            <input
              id="image-upload"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {imagePreview ? (
              <>
                {/* biome-ignore lint/performance/noImgElement: local blob preview, not a remote/optimizable image */}
                <img
                  src={imagePreview}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover to indicate changeability */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">Change Image</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                {/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
                <svg
                  className="w-12 h-12 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Select Image to Upload
                </span>
              </div>
            )}
          </label>
          {state.status === "error" && state.errors?.image && (
            <span className="text-red-500 text-sm mt-2">
              {state.errors.image[0]}
            </span>
          )}
        </div>

        {/* Content Textarea */}
        <div className="flex flex-col flex-1">
          <textarea
            name="content"
            placeholder="Write your blogs.."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full h-full min-h-100 bg-transparent text-base md:text-lg text-primary-text placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none resize-y leading-relaxed whitespace-pre-wrap"
          />
          {state.status === "error" && state.errors?.content && (
            <span className="text-red-500 text-sm mt-2">
              {state.errors.content[0]}
            </span>
          )}
        </div>
      </main>
    </form>
  );
}
