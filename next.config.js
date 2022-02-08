/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  images: {
    domains: ["image-component.nextjs.gallery", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
