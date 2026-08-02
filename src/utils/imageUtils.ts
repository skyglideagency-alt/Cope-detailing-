import React from "react";

/**
 * Handles image loading errors gracefully across development, production builds,
 * GitHub Pages subpaths, and external static hosts.
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  originalSrc?: string
) {
  const target = e.currentTarget;
  const currentLevel = parseInt(target.getAttribute("data-fallback-level") || "0", 10);
  const rawUrl = originalSrc || target.src;
  
  // Extract filename
  const rawFileName = rawUrl.split("/").pop()?.split("?")[0] || "";
  
  // Remove Vite compilation hash (e.g. FB_IMG_1785402137231-h7mk0uYU.jpg -> FB_IMG_1785402137231.jpg)
  const cleanFileName = rawFileName.replace(/-[A-Za-z0-9_-]{8}(\.[a-zA-Z0-9]+)$/i, "$1");

  if (!cleanFileName) return;

  if (currentLevel === 0) {
    target.setAttribute("data-fallback-level", "1");
    target.src = `./images/${cleanFileName}`;
  } else if (currentLevel === 1) {
    target.setAttribute("data-fallback-level", "2");
    target.src = `./${cleanFileName}`;
  } else if (currentLevel === 2) {
    target.setAttribute("data-fallback-level", "3");
    target.src = `/images/${cleanFileName}`;
  } else if (currentLevel === 3) {
    target.setAttribute("data-fallback-level", "4");
    target.src = `/${cleanFileName}`;
  }
}
