/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/aura-reset-studio" : undefined,
  assetPrefix: isGitHubPages ? "/aura-reset-studio/" : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
