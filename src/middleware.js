import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // ✅ NO proteger assets/archivos estáticos ni rutas internas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.match(/\.(png|jpg|jpeg|webp|gif|svg|ico|mp4|webm|css|js|map|txt|xml|json)$/i)
  ) {
    return NextResponse.next();
  }

  // ✅ Si no es /curso, no hacemos nada
  if (!pathname.startsWith("/curso")) {
    return NextResponse.next();
  }

  // ✅ Auth solamente para páginas del curso
  const authCookie = req.cookies.get("course_auth")?.value;
  if (authCookie === "true") return NextResponse.next();

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

// ✅ Matcher SIMPLE (sin regex avanzada)
export const config = {
  matcher: ["/curso/:path*"],
};
