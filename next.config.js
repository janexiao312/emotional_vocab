/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig