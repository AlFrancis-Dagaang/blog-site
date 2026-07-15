import "server-only";

import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "./config";

export async function uploadFile(key: string, file: File): Promise<string> {
  await put(key, file, {
    access: "public",
    token: BLOB_READ_WRITE_TOKEN,
  });

  return key;
}
