/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["source.unsplash.com", "images.unsplash.com"]
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/page/1'
            }
        ]
    }
}

module.exports = nextConfig
