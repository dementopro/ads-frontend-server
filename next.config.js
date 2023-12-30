/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            '127.0.0.1',
            'localhost',
            '35.88.150.139',
            '18.246.37.168',
            '54.203.149.67',
            '35.91.9.232',
            'adsgency.ai',
            '18.237.87.122'
        ],
    },
    async rewrites() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        // Check if apiUrl is defined
        if (!apiUrl) {
            console.error('NEXT_PUBLIC_API_URL is not defined in your environment variables.');
            return [];
        }

        return [
            {
                source: "/fapi/:path*",
                destination: `${apiUrl}/:path*`,
            },
        ]
    },
    webpack: (config) => {
      config.ignoreWarnings = [
        // https://webpack.js.org/configuration/other-options/#ignorewarnings
        {
          module: /node-fetch/,
          message: /.*Can't resolve 'encoding'.*/,
        },
      ];

      return config;
    },
    experimental: {
        proxyTimeout: 10 * 60 * 1000,
        serverActions: true,
    }
}
module.exports = nextConfig
