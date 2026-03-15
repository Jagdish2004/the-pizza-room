import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Auto-convert JPEGs → WebP / AVIF (50–70 % smaller, same quality)
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 30 days in the browser
    minimumCacheTTL: 2_592_000,
    // Only the sizes we actually render (avoids unnecessary renditions)
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
};

export default nextConfig;
