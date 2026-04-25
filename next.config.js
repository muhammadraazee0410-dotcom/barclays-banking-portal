/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/barclays-banking-portal',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
module.exports = nextConfig
