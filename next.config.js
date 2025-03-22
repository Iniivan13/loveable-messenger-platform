
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure we can serve the data file from the public directory
  async headers() {
    return [
      {
        source: '/data/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
  // Disable the bodyParser size limit and enable external resolver
  api: false, // Remove the incorrect api configuration
};

module.exports = nextConfig;
