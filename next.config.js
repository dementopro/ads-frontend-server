/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      '35.88.150.139',
      '18.246.37.168',
      '54.203.149.67',
      '35.91.9.232',
      'adsgency.ai',
      '127.0.0.1'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/fapi/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ]
  },
  experimental: {
    proxyTimeout: 10 * 60 * 1000,
  }
}

module.exports = nextConfig
