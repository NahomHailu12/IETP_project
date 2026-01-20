import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["../prisma/generated"],
  output: "standalone",
  outputFileTracingIncludes: {
    "/api/**/*": ["./prisma/generated/prisma/**/*"],
    "/**/*": ["./prisma/generated/prisma/**/*"],
  },
  // ✅ Add this to prevent Next.js from trying to "browser-ify" Prisma
  serverExternalPackages: ["@prisma/client", "ws"],
};

export default nextConfig;
