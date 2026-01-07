"use client";

import Image from "next/image";
import { getImagePath } from "@/lib/image-utils";

type BaseImageProps = React.ComponentProps<typeof Image>;

/**
 * BasePath-aware Image component for GitHub Pages
 * Automatically handles basePath for static export
 */
export default function BaseImage({ src, ...props }: BaseImageProps) {
  // Get the correct path with basePath
  const imageSrc = typeof src === 'string' ? getImagePath(src) : src;
  
  return <Image src={imageSrc} {...props} />;
}

