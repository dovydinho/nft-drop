/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'stashh.mypinata.cloud',
      'n6c2y4pgeqt4u3r7th7yyfhjlm4e4llquctqvm7lde6pduuuwjiq.arweave.net',
      'images.pexels.com'
    ]
  }
};

module.exports = nextConfig;
