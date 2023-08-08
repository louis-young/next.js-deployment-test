import "./src/constants/environment-variables/index.mjs";

/** @type {import("next").NextConfig} */
const nextConfiguration = {
  eslint: {
    dirs: ["pages", "components", "src", "cypress"],
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfiguration;
