import "server-only";

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error(
    "Missing BLOB_READ_WRITE_TOKEN — check .env.local (see PROJECT_CONTEXT.md > Env Vars)",
  );
}

export const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
