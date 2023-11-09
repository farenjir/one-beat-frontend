import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "./langs";
import { ILocale } from "./types";

function getLocale(request: NextRequest): ILocale {
	const { value: customerLocale }: any = request.cookies.get("locale") || {};
	if (locales.includes(customerLocale)) {
		return customerLocale;
	} else {
		return defaultLocale;
	}
}

export function middleware(request: NextRequest) {
	const checkAuth = request.cookies.get("app-token");
	// Check if there is any supported locale in the pathname
	const pathname = request.nextUrl.pathname;
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
	// if (checkAuth && pathname.includes("/auth")) {
	// 	const [locale] = request.nextUrl.pathname.split("/auth");
	// 	request.nextUrl.pathname = `${locale}${pathname}`;
	// 	return Response.redirect(request.nextUrl);
	// }
	if (pathnameHasLocale) return;
	// Redirect if there is no locale
	const locale: ILocale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// The new URL
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		"/((?!_next|_next/static|_next/image|api|favicon.ico|assets|pwa).*)", // skip all internal paths
	],
};
