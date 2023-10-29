/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['panda-pizza.com.ua'],
    },
};


module.exports = nextConfig
