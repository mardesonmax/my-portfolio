/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'api.tsx'],
  images: {
    domains: ['localhost', 'mardesondev.com'],
  },
};

module.exports = nextConfig;
