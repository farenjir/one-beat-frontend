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
	// Check if there is any supported locale in the pathname
	const pathname = request.nextUrl.pathname;
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
	if (pathnameHasLocale) {
		const [space, locale] = pathname.split("/");
		request.cookies.set("locale", locale);
		return;
	}
	// Redirect if there is no locale
	const locale: ILocale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// The new URL is now /fa/targetPathname
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		"/((?!_next|_next/static|_next/image|api|favicon.ico|assets|pwa).*)", // skip all internal paths
	],
};
