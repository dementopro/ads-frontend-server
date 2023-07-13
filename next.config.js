/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      '35.88.150.139',
      'adsgency.ai',
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
}

module.exports = nextConfig
