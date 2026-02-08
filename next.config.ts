import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Required for Cloudflare Pages (Free Tier)
  images: {
    unoptimized: true,
  },
  // 2. Ignore Linting errors so the build doesn't fail on apostrophes or unused vars
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 3. Ignore TypeScript errors (optional, but prevents other strict blocks)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;