import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/content/i18n";

const localeCookie = "NEXT_LOCALE";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";

  if (isLocale(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set(localeCookie, firstSegment, { maxAge: 60 * 60 * 24 * 365, sameSite: "lax", path: "/" });
    return response;
  }

  const savedLocale = request.cookies.get(localeCookie)?.value;
  const locale = savedLocale && isLocale(savedLocale) ? savedLocale : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon|manifest.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)"],
};
