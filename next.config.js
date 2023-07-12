/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'localhost',
      '35.88.150.139',
    ],
  }
}

module.exports = nextConfig
