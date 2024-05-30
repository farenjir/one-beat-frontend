import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/assets/langs";
import { Locales } from "./types";
import { ACCESS_TOKEN } from "./types/constance";

function getLocale(request: NextRequest): Locales {
	const { value: customerLocale }: any = request.cookies.get("locale") || {};
	if (locales.includes(customerLocale)) {
		return customerLocale;
	} else {
		return defaultLocale;
	}
}
function pathnameHsaLocale(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
	if (hasLocale) return "pathname-is-ok";
	// Redirect if there is no locale
	const locale: Locales = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
}

function userAuthenticated(request: NextRequest) {
	const hasToken = request.cookies.get(ACCESS_TOKEN)?.value;
	const pathname = request.nextUrl.pathname;
	if (hasToken && pathname.includes("auth")) {
		request.nextUrl.pathname = "/";
	}
}

export const config = {
	matcher: [
		"/((?!_next|_next/static|_next/image|api|favicon.ico|robots.txt|assets|pwa).*)", // skip all paths
	],
};

export default function middleware(request: NextRequest) {
	userAuthenticated(request);
	if (pathnameHsaLocale(request)) return;
	// The new URL
	return Response.redirect(request.nextUrl);
}
