/**
 * Get the correct image path for static export with basePath
 * This ensures images work correctly on GitHub Pages
 */
export function getImagePath(src: string): string {
  // Detect if we're on GitHub Pages (production)
  const isGitHubPages = typeof window !== 'undefined' 
    ? window.location.pathname.startsWith('/pro_website_uae')
    : process.env.NODE_ENV === 'production';
  
  const basePath = isGitHubPages ? '/pro_website_uae' : '';
  
  // If src already starts with basePath, return as-is
  if (basePath && src.startsWith(`${basePath}/`)) {
    return src;
  }
  
  // If src starts with '/', prepend basePath in production
  // This is needed for GitHub Pages deployment
  if (src.startsWith('/')) {
    return basePath ? `${basePath}${src}` : src;
  }
  
  // Return as-is for relative paths or external URLs
  return src;
}
