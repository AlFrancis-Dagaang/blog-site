import { readFileSync } from "fs";
import { uploadFile } from "../lib/storage";
import { buildCoverImageKey } from "../lib/storage/keys";

async function main() {
  const filePath = "./test.png";
  const buffer = readFileSync(filePath);
  const file = new File([buffer], "test.png", { type: "image/png" });

  const key = buildCoverImageKey("test-post", "test.png");
  console.log("Uploading with key:", key);

  const url = await uploadFile(key, file);
  console.log("Uploaded successfully:", url);
}

main().catch((err) => {
  console.error("Upload failed:", err);
  process.exit(1);
});
