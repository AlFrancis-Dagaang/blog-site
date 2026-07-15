import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      new URL("https://s43uw3zwlzrhjj9o.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
