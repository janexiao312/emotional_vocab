import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig;
