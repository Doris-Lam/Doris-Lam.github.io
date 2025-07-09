import type { NextConfig } from "next";

// No assetPrefix or basePath needed for root-level GitHub Pages deployment (doris-lam.github.io)
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
