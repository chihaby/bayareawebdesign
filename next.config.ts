/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
      // Your actual Strapi Cloud domain
      {
        protocol: 'https',
        hostname: 'loved-pleasure-cb5eab8cd5.strapiapp.com',
        pathname: '/uploads/**',
      },
      // Generic Strapi Cloud pattern (backup)
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;