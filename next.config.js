/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['masterpiecer-images.s3.yandex.net', 'lh3.googleusercontent.com', 'img.shields.io']
    },
    webpack: (config) => {
        config.resolve.alias['@'] = __dirname;
        return config;
      },
}



module.exports = nextConfig