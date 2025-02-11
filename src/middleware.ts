import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))
  // Current route
  const route = request.nextUrl.pathname;
  console.log("from middleware", route);
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("from middleware token", token);
  const isPublicRoute = route === "/login" || route === "/register";
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isPublicRoute && token) {
    console.log("from line 18", request.url);
    return NextResponse.redirect(new URL(`/dashboard/${token?.role}`, request.url));
  }

  // console.log()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
