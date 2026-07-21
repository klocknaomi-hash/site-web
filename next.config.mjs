/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tarifs',
        destination: '/pricing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
