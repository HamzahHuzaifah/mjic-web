import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output standalone is highly recommended for cPanel deployment */
  output: "standalone",
  
  /* Disable eslint and typescript checks during build if you want to prevent OOM in extremely tight RAM settings */
  /* (Uncomment if cPanel build fails due to memory limit) */
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  
  images: {
    // Preventing high CPU/RAM usage for on-the-fly image resizing on shared hosting
    unoptimized: true,
  },
};

export default nextConfig;
