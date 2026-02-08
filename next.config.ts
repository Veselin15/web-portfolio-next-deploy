import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Disable image optimization for Cloudflare Free Tier
  images: {
    unoptimized: true,
  },
  // 2. Ensure standalone output is NOT used (Cloudflare uses its own adapter)
  // output: "standalone",
};

export default nextConfig;