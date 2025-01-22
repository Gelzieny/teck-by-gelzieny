import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.graphassets.com',
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com',
      },
    ],
  },
}

export default nextConfig
