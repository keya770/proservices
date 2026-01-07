import type { NextConfig } from "next";

const repoName = "pro_website_uae";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

// Check if we need static export (for GitHub Pages deployment)
const useStaticExport = process.env.USE_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Only use static export if explicitly enabled (for GitHub Pages deployment)
  ...(useStaticExport ? { output: "export" } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
