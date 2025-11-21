import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // this enables `next export`
  images: {
    unoptimized: true, // required for static export when using next/image
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  
  // Optimize JavaScript
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable SWC minification
  swcMinify: true,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

export default nextConfig;
