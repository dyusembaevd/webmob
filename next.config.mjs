import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", pathname: "**", hostname: "inboost.kz" },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        pathname: "/img/**", // Allow images from Figma with this path
      },
      {
        protocol: "https",
        hostname: "inboost.kz",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "5.35.107.18",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "5.35.107.65",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "5.35.107.65:8082",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "5.35.107.18:8082",
        pathname: "**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  webpack(config) {
    // Find the existing rule for handling SVG files (e.g., file-loader)
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    // If fileLoaderRule is found, modify it to exclude `.svg` files
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add a new rule to handle `.svg` files using @svgr/webpack
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer, // Apply the rule only for JS/TS files
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"], // Use @svgr/webpack to convert SVGs into React components
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withNextIntl(nextConfig);
