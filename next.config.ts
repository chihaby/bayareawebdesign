/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Local dev (Strapi running locally)
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Strapi Cloud media CDN
      {
        protocol: 'https',
        hostname: 'loved-pleasure-cb5eab8cd5.media.strapiapp.com',
        pathname: '/**',
      },
      // Optional: catch-all for any Strapi Cloud project media
      {
        protocol: 'https',
        hostname: '*.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
