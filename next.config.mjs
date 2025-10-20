/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // wildcard for all domains
      },
      {
        protocol: 'http',
        hostname: '**',  // optional, if you also want to allow http
      },
    ],
  },
};

export default nextConfig;
