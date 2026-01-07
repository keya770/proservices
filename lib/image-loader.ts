/**
 * Custom image loader for Next.js static export with basePath
 * This ensures images work correctly on GitHub Pages
 */
export default function customLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/pro_website_uae' : '';
  
  // If src already includes basePath, return as-is
  if (src.startsWith(basePath)) {
    return src;
  }
  
  // If src starts with '/', prepend basePath
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  
  // Return as-is for relative paths or external URLs
  return src;
}

