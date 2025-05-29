import type { NextConfig } from "next"

const development = process.env.NODE_ENV === "development"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // static build for now
  output: "export",
  basePath: development ? "" : process.env.NEXT_PUBLIC_BASE_URL,
  assetPrefix: development ? "" : process.env.NEXT_PUBLIC_BASE_URL,
  images: {
    // unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/utils/imageLoader.ts",
  },
}

export default nextConfig
