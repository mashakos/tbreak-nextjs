import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [
      360, 414, 512, 640, 750, 828, 1080, 1200, 1536, 1920, 2048, 3840,
    ],
  },
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withContentlayer(nextConfig);
