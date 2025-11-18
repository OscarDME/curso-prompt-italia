import { NextResponse } from "next/server";

export function middleware(req) {
  const authCookie = req.cookies.get("course_auth")?.value;

  // Si está autenticado, pasa
  if (authCookie === "true") {
    return NextResponse.next();
  }

  // Si no, lo mandamos a /login
  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("from", req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

// Solo aplica a rutas privadas
export const config = {
  matcher: ["/curso/:path*"],
};
