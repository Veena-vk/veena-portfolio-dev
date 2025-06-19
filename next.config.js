// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // 👈 ensures App Router is active
  },
};

module.exports = nextConfig;
