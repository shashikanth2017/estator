/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['encrypted-tbn0.gstatic.com','bayut-production.s3.eu-central-1.amazonaws.com']
  }
}

module.exports = nextConfig
