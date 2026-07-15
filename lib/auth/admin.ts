"use server";

import { timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function loginAdmin(
  password: string,
): Promise<{ success: boolean }> {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!adminPassword || !sessionSecret) {
    throw new Error("Missing ADMIN_PASSWORD or ADMIN_SESSION_SECRET");
  }

  if (!safeCompare(password, adminPassword)) {
    return { success: false };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, sessionSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return { success: true };
}

export async function verifyAdminSession(): Promise<boolean> {
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;
  if (!sessionSecret) return false;

  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  if (!cookie) return false;

  return safeCompare(cookie.value, sessionSecret);
}

export async function logoutAdmin(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
