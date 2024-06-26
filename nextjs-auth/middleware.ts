import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "@/app/lib/stateless-session";
import { cookies } from "next/headers";
import { verifySession } from "./app/lib/data-access-layer";

// 1. Specify protected and public routes
const protectedRoutes = ["/profile"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  // const cookie = cookies().get("session")?.value;
  // const session = await decrypt(cookie);

  const { isAuth, userId } = await verifySession();

  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !isAuth) {
    console.log("THis path is protected. Login to continue...");
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (isPublicRoute && isAuth && !req.nextUrl.pathname.startsWith("/profile")) {
    // 6. Redirect to /profile if the user is authenticate
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
