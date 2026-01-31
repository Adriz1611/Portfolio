/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.altere.in',
      },
      {
        protocol: 'https',
        hostname: 'cfstatic.give.do',
      },
      {
        protocol: 'https',
        hostname: 'gameessentials.in',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
