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
      // Add your production Strapi domain when you deploy
      {
        protocol: 'https',
        hostname: 'https://loved-pleasure-cb5eab8cd5.strapiapp.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;