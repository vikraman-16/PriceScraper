/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        domains: ['m.media-amazon.in']
    }
};

export default nextConfig
// module.exports = nextConfig
