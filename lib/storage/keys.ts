export function buildCoverImageKey(slug: string, filename: string): string {
  const ext = filename.split(".").pop();
  const timestamp = Date.now();
  return `posts/${slug}-${timestamp}.${ext}`;
}
