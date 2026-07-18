import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Image optimization — WebP/AVIF auto conversion
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },

  // ✅ Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ✅ HTTPS enforcement
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // ✅ Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // ✅ Prevent MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // ✅ Referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // ✅ Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // ✅ Static asset caching (images, fonts)
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ✅ 301 redirects
  async redirects() {
    return [
      // Redirect www to non-www (handle at hosting level too)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.forgen.co" }],
        destination: "https://forgen.co/:path*",
        permanent: true,
      },
    ];
  },

  // ✅ Compression
  compress: true,

  // ✅ Power by header remove (security)
  poweredByHeader: false,

  // ✅ Trailing slash consistency
  trailingSlash: false,
};

export default nextConfig;
