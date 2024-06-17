import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { SessionPayload } from "./definitions";
import { kv } from "@vercel/kv";
import { verifySession } from "./data-access-layer";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 hour")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    console.log("Cookie is verified.");
    return payload;
  } catch (error) {
    console.log("Failed to verify session:");
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  //  encrypt a session before storing as cookie
  const session = await encrypt({ userId, expiresAt });

  //  create a session in database using vercel kv (redis database)
  await kv.hset(`sessionToken:${session}`, {
    userId: userId,
    expiresAt: expiresAt,
  });

  console.log("new session stored in database...");
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
  // const session = cookies().get("session")?.value;
  // cookie verification
  // const payload = await decrypt(session);

  const { isAuth, userId } = await verifySession();

  if (!isAuth) {
    return null;
  }

  // Ensure userId is a string before passing to createSession
  if (typeof userId !== "string") {
    console.error("userId must be a string");
    return null;
  }

  createSession(userId);

  // const expires = new Date(Date.now() + 60 * 1000);

  // await kv.hset(`userId:${userId}`, { expiresAt: expires });

  // console.log("new expiration date stored...");

  // cookies().set("session", session, {
  //   httpOnly: true,
  //   secure: true,
  //   expires: expires,
  //   sameSite: "lax",
  //   path: "/",
  // });

  console.log("new Session is updated...");
}

export function deleteSession() {
  cookies().delete("session");
}
