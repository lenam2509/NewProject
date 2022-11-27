/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
// next.config.js
module.exports = {
  images: {
    domains: ['api.trungthanhweb.com','cdn.hoang-phuc.com'],
    
  },
}