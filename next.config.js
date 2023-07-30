/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextTranslate(nextConfig)
