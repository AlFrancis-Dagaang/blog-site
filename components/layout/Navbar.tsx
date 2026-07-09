"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { useTheme } from "@/components/ui/theme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-light bg-white/80 dark:bg-[#00212e]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Text Logo */}
          <Link href="/" aria-label="Home" className="flex items-center group">
            <span className="font-bold text-lg md:text-xl tracking-tight text-primary-text transition-colors">
              A<span className="text-brand">3</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand"
                      : "text-primary-text hover:text-brand"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Theme Toggle — Desktop */}
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex items-center gap-3 focus:outline-none group"
            >
              {/* Pill Switch */}
              <div
                className={`w-12 h-6 rounded-full border-2 flex items-center px-1 transition-colors duration-300 ${
                  theme === "dark" ? "border-white" : "border-black"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 ${
                    theme === "dark"
                      ? "bg-white translate-x-6"
                      : "bg-black translate-x-0"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle — Mobile */}
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex items-center gap-3 focus:outline-none group"
            >
              {/* Pill Switch */}
              <div
                className={`w-12 h-6 rounded-full border-2 flex items-center px-1 transition-colors duration-300 ${
                  theme === "dark" ? "border-white" : "border-black"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 ${
                    theme === "dark"
                      ? "bg-white translate-x-6"
                      : "bg-black translate-x-0"
                  }`}
                />
              </div>
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-primary-text"
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-border-light bg-white dark:bg-[#00212e] md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive ? "text-brand bg-brand/10" : "text-primary-text"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
