export function getStorageUrl(coverImage: string): string {
  if (coverImage.startsWith("/")) return coverImage;
  return coverImage;
}
