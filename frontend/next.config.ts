import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    turbo: {},
  },
  // Exclude beta folder from build
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/beta/**', '**/node_modules/**'],
    };
    return config;
  },
};

export default nextConfig;
