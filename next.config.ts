import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // The booking form now lives on the Contact page.
    return [{ source: "/book", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
