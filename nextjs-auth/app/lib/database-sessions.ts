import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { SessionPayload } from "@/app/lib/definitions";
import { kv } from "@vercel/kv";
import { redirect } from "next/navigation";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 minute")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 60 * 1000);

  //  create a session in database using vercel kv (redis database)
  await kv.hset(`userId:${userId}`, { expiresAt: expiresAt });

  console.log("user id stored into redis database...");

  //  encrypt a session before storing as cookie
  const session = await encrypt({ userId, expiresAt });

  console.log("new databse session created...");
  //   store a session as a cookie
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  console.log("session stored as cookie....");
}

export async function updateSession() {
  const session = cookies().get("session")?.value;
  // cookie verification
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 60 * 1000);

  // await kv.hset(`userId:${session?.userId}`, { expiresAt: expires });

  console.log("new expiration date stored...");

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });

  console.log("Session is updated...");
}

export function deleteSession() {
  cookies().delete("session");
}
