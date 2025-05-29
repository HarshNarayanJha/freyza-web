import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // static build for now
  output: "export",
  basePath: "/freyza-web",
  assetPrefix: "/freyza-web",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
