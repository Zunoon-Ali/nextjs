/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",      // use https for Unsplash URLs
        hostname: "plus.unsplash.com",
        // port: '',           // port is optional, omit if not needed
        pathname: "/**",        // allow all paths on this domain
      },
    ],
  },
};

export default nextConfig;
