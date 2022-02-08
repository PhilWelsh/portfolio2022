/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreBuildErrors: true,
  images: {
    domains: ["image-component.nextjs.gallery", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
