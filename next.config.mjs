/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/product-portfolio',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/science',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
