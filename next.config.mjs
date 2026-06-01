/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tarifs',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/mentions-legales',
        destination: '/',
        permanent: false,
      },
      {
        source: '/cgu',
        destination: '/',
        permanent: false,
      },
      {
        source: '/confidentialite',
        destination: '/',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
