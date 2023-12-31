/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["default", "en", "de", "fr"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
