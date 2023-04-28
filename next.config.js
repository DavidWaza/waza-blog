/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverComponentsExternalPackages: ['bcrypt'],
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
