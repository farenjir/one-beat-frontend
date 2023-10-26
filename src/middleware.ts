import type { NextRequest } from "next/server";

import { lDefault, locales, ILocale } from "./langs";

function getLocale(request: NextRequest): ILocale {
	return lDefault;
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const pathname = request.nextUrl.pathname;
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
	if (pathnameHasLocale) return;
	// Redirect if there is no locale
	const locale: ILocale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// The new URL is now /fa/targetPathname
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		"/((?!_next|assets|pwa).*)", // Skip all internal paths ( _next and assets and pwa )
	],
};