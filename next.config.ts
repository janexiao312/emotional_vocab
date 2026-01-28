import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    dirs: ['app', 'src']
  }
};

export default nextConfig;
