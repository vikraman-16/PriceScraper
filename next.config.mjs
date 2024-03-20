/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // serverActions: true,
        esmExternals: true, 
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        // domains: ['m.media-amazon.in'],
        domains: ['m.media-amazon.com'],
        
    }
};

export default nextConfig
// module.exports = nextConfig
