/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg')
        );
        config.module.rules.push({
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
        });
        config.module.rules.push({
            test: /\.svg$/i,
            resourceQuery: { not: /url/ },
            use: ['@svgr/webpack'],
        });
        return config;
    },
};
module.exports = nextConfig;