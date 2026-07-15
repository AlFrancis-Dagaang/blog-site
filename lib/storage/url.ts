const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_BASE_URL;

export function getStorageUrl(coverImage: string): string {
  if (coverImage.startsWith("/")) return coverImage; // local seed asset
  return `${BLOB_BASE_URL}/${coverImage}`; // bare key → full Blob URL
}
