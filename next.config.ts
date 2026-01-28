import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig;
