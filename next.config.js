/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
