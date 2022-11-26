/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', 'goerli.etherscan.io']
  }
};

module.exports = nextConfig;
