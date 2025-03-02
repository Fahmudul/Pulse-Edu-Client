import { jwtDecode } from "jwt-decode";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./Utils/getUser";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Current route
  const route = request.nextUrl.pathname;
  const user = await getUser();
  console.log("from line 13",user)
  const isPublicRoute = route === "/login" || route === "/register";
  // if (!user && !isPublicRoute) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (isPublicRoute && user) {
  //   const redirectRoute =
  //     user && user?.role === "admin"
  //       ? "/dashboard/admin/analytics"
  //       : `/dashboard/${user?.role}/add-blog`;
  //   return NextResponse.redirect(new URL(redirectRoute, request.url));
  // }
  // if (
  //   user &&
  //   ((user?.role === "admin" && route.startsWith("/dashboard/user")) ||
  //     (user?.role === "student" && route.startsWith("/dashboard/admin")))
  // ) {
  //   const redirectRoute =
  //   user?.role === "admin"
  //       ? "/dashboard/admin/analytics"
  //       : `/dashboard/${user?.role}/add-blog`;
  //   return NextResponse.redirect(new URL(redirectRoute, request.url));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
