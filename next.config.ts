import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tblg.k-img.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
