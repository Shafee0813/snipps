import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

export default nextConfig;
