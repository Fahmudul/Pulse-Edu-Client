import { jwtDecode } from "jwt-decode";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./Utils/getUser";
import { auth } from "@/auth";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Current route
  const route = request.nextUrl.pathname;
  let user;
  let userFromSession;
  const session = await auth();
  userFromSession = session?.user;
  if (userFromSession) {
    user = userFromSession;
    console.log(" token got from token");
  } else {
    user = await getUser();
    console.log("token getUser", user);
    console.log(" token got from get user");
  }
  console.log(user, "from middleware");
  console.log(userFromSession, "from session");
  const isPublicRoute = route === "/login" || route === "/register";
  if (!user && !isPublicRoute) {
    console.log("hitting 1");

    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isPublicRoute && user) {
    const redirectRoute =
      user && user?.role === "admin"
        ? "/dashboard/admin/analytics"
        : user?.role === "teacher"
        ? "/dashboard/teacher/profile"
        : `/dashboard/student/profile`;
    console.log("hitting 2");

    return NextResponse.redirect(new URL(redirectRoute, request.url));
  }
  if (
    user &&
    ((user?.role === "admin" && !route.startsWith("/dashboard/admin")) ||
      (user?.role === "student" && !route.startsWith("/dashboard/student")) ||
      (user?.role === "teacher" && !route.startsWith("/dashboard/teacher")))
  ) {
    console.log("hitting 3");
    const redirectRoute =
      user?.role === "admin"
        ? "/dashboard/admin/analytics"
        : user?.role === "teacher"
        ? "/dashboard/teacher/profile"
        : `/dashboard/${user?.role}/profile`;
    return NextResponse.redirect(new URL(redirectRoute, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
