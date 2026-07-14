import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My Blog | Al Francis Dagaang",
  description:
    "Thoughts on full-stack engineering, cloud architecture, and building things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: blocking script needed to prevent dark mode flash before React hydration
          dangerouslySetInnerHTML={{
            __html: `
							(function() {
								try {
									var saved = localStorage.getItem('theme');
									var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
									var theme = saved !== null ? saved : system;
									if (theme === 'dark') {
										document.documentElement.classList.add('dark');
									}
								} catch (e) {}
							})();
						`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <div className="dot-grid-bg" aria-hidden="true" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
