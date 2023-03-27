/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
