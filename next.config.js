/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig;
