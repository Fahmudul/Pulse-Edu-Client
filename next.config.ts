import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Better for serverless deployments
  
  // If you need server actions, use this instead:
  experimental: {
    serverActions: {
      // You can optionally configure specific settings
      allowedOrigins: ['pulse-edu.vercel.app'],
      bodySizeLimit: '2mb',
    },
  },
  
  // Ensure API routes are properly handled
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;