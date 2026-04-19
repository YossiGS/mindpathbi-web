import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const scriptSrc = isProd
  ? "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com"
  : "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://api.resend.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const immutableCache = {
  key: "Cache-Control",
  value: "public, max-age=31536000, immutable",
};

const nextConfig: NextConfig = {
  turbopack: {},
  headers: async () => [
    {
      source: "/rive/:path*",
      headers: [immutableCache],
    },
    {
      source: "/_next/static/:path*",
      headers: [immutableCache],
    },
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],
};

export default nextConfig;
