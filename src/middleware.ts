import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/assets/langs";
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
		"/((?!_next|_next/static|_next/image|api|favicon.ico|robots.txt|assets|pwa).*)", // skip all paths
	],
};

// import type { NextRequest } from "next/server";

// import { defaultLocale, locales } from "./assets/langs";
// import { ILocale } from "./types";

// import { ACCESS_TOKEN, DASHBOARDS, LOCALE_NAME } from "./utils/constance";

// function getLocale(request: NextRequest): ILocale {
// 	const { value: customerLocale }: any = request.cookies.get(LOCALE_NAME) || {};
// 	if (locales.includes(customerLocale)) {
// 		return customerLocale;
// 	} else {
// 		return defaultLocale;
// 	}
// }

// function checkAccessToken(request: NextRequest) {
// 	const { value: checkToken }: any = request.cookies.get(ACCESS_TOKEN) || {};
// 	const pathname = request.nextUrl.pathname;
// 	// check auth
// 	const isDashboards = DASHBOARDS.some((path) => pathname.startsWith(`/${path}/`) || pathname === `/${path}`);
// 	if (isDashboards) {
// 		if (checkToken) {
// 			return;
// 		} else {
// 			request.nextUrl.pathname = "/";
// 			return Response.redirect(request.nextUrl);
// 		}
// 	} else {
// 		if (checkToken) {
// 			request.nextUrl.pathname = "/admin";
// 			return Response.redirect(request.nextUrl);
// 		} else {
// 			return;
// 		}
// 	}
// }

// export function middleware(request: NextRequest) {
// 	const pathname = request.nextUrl.pathname;
// 	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
// 	// pathnameHasLocale
// 	if (pathnameHasLocale) return checkAccessToken(request);
// 	// Redirect if there is no locale
// 	const locale: ILocale = getLocale(request);
// 	request.nextUrl.pathname = `/${locale}${pathname}`;
// 	// The new URL
// 	checkAccessToken(request);
// }

// export const config = {
// 	matcher: [
// 		"/((?!_next|_next/static|_next/image|api|favicon.ico|robots.txt|assets|pwa).*)", // skip all paths
// 	],
// };
