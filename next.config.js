/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image-component.nextjs.gallery", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
