/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['user-images.githubusercontent.com'],
        unoptimized: true,
    },
}

module.exports = nextConfig
