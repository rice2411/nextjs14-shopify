import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./utils/server/auth";

export function middleware(request: NextRequest) {
  const user = getUser();
  const isAuthPage = request.nextUrl.pathname.includes("auth");
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/landing", request.url));
  }
  // if (isAuthPage && user) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  if (!isAuthPage && !user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public file
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|public).*)",
  ],
};
