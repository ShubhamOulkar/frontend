import "server-only";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { decrypt } from "./database-sessions";
import { cache } from "react";

export const verifySession = cache(async () => {
  console.log("verifying session...");
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session) {
    return { isAuth: false, userId: {} };
  }

  return { isAuth: true, userId: session?.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  const { isAuth, userId } = session;

  // Ensure userId is a primitive type (number or string)
  if (typeof userId !== "number" && typeof userId !== "string") {
    console.log("Invalid userId type:", typeof userId);
    return null;
  }

  try {
    const user = await sql`select id, name, email from users
                      where id=${userId}`;
    console.log("User data fetched from database...");
    return user.rows[0];
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
