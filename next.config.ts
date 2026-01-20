import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["../prisma/generated"],
  /* config options here */
};

export default nextConfig;
