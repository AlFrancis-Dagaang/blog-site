import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// biome-ignore lint/style/noNonNullAssertion: <!-- Reason: The DATABASE_URL is guaranteed to be set in the .env.local file. -->
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
