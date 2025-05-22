/** @type {import('next').NextConfig} */
const nextConfig = {

    // output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "**",
            },
        ],
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': new URL('./src', import.meta.url).pathname,
        };
        return config;
    }

};


export default nextConfig;
