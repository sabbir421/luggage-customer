/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["doorap-file-bucket.s3.amazonaws.com"],
  },
};

export default nextConfig;
