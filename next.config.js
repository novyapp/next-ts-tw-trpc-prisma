/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "robohash.org", "localhost"],
  },
};

module.exports = nextConfig;
