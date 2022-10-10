/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['tsx', 'ts'],
  images: {
    domains: ['localhost', 'mardesondev.com'],
  },
};

module.exports = nextConfig;
