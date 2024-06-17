import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./app/nextjs-auth/lib/data-access-layer";

// import { decrypt } from "./app/nextjs-auth/lib/database-sessions";
// import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = [
  "/nextjs-auth/profile",
  "/dashboard/ui/customers",
  "/dashboard/ui/summary",
  "/dashboard/ui/invoices",
];
const publicRoutes = [
  // "/",
  // "/dashboard",
  // "/nextjs-auth",
  "/nextjs-auth/login",
  "/nextjs-auth/signup",
  "/dashboard/login",
  "/dashboard/signup",
];

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
    console.log("This path is protected. Login to continue...");
    if (req.nextUrl.pathname.startsWith("/nextjs-auth")) {
      return NextResponse.redirect(new URL("/nextjs-auth/login", req.nextUrl));
    } else {
      return NextResponse.redirect(new URL("/dashboard/login", req.nextUrl));
    }
  }

  if (isPublicRoute && isAuth) {
    if (
      req.nextUrl.pathname.startsWith("/nextjs-auth") &&
      !req.nextUrl.pathname.startsWith("/nextjs-auth/profile")
    ) {
      // 6. Redirect to /profile if the user is authenticate
      return NextResponse.redirect(
        new URL("/nextjs-auth/profile", req.nextUrl)
      );
    } else if (req.nextUrl.pathname.startsWith("/dashboard/ui/")) {
      // 7. Redirect to /summary or /customers or /invoices if the user is authenticate
      return NextResponse.redirect(
        new URL(`${req.nextUrl.pathname}`, req.nextUrl)
      );
    } else if (
      req.nextUrl.pathname === "/dashboard/ui/login" ||
      req.nextUrl.pathname === "/dashboard/ui/signup"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/ui/summary", req.nextUrl)
      );
    } else if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      !req.nextUrl.pathname.startsWith("/dashboard/ui")
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/ui/summary", req.nextUrl)
      );
    }
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
