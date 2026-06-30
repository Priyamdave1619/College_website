/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.greenfield.ac.in' },
      { protocol: 'https', hostname: 'meridianuniversity.ac.in' },
    ],
  },
}
module.exports = nextConfig
