import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Current route
  const route = request.nextUrl.pathname;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const isPublicRoute = route === "/login" || route === "/register";
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isPublicRoute && token) {
    const redirectRoute =
      token && token.role === "admin"
        ? "/dashboard/admin/analytics"
        : "/dashboard/user/profile";
    return NextResponse.redirect(new URL(redirectRoute, request.url));
  }
  if (
    token &&
    ((token.role === "admin" && route.startsWith("/dashboard/user")) ||
      (token.role === "user" && route.startsWith("/dashboard/admin")))
  ) {
    const redirectRoute =
      token.role === "admin"
        ? "/dashboard/admin/analytics"
        : "/dashboard/user/profile";
    return NextResponse.redirect(new URL(redirectRoute, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
