/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  // reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig