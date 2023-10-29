/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['panda-pizza.com.ua'],
    },
    // output: 'export',
};


module.exports = nextConfig
