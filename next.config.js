/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true, images: {
            unoptimized: true
        }
    },
    // reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig