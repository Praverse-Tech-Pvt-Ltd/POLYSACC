/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/product-portfolio',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
