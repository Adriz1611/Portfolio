/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.altere.in",
      },
      {
        protocol: "https",
        hostname: "cfstatic.give.do",
      },
      {
        protocol: "https",
        hostname: "gameessentials.in",
      },
      {
        protocol: "https",
        hostname: "sangamuniversity.ac.in",
      },
      {
        protocol: "https",
        hostname: "www.presentations.gov.in",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Generate ETags for caching
  generateEtags: true,
  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "motion",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-avatar",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "react-icon-cloud",
    ],
  },
  // Headers for caching static assets
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.css",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
