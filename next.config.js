/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.externals = [...config.externals, 'three'];
    return config;
  },
};

module.exports = nextConfig;
