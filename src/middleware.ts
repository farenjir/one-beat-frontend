import NextAuth from "next-auth";

import { DEFAULT_LOCALE, locales } from "./langs";
import { ILocale } from "./types";

import authConfig from "./service/auth/auth.config";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "@/service/auth/route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	const { value: customerLocale }: any = req.cookies.get("locale") || { value: DEFAULT_LOCALE };

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return null;
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return null;
	}

	if (!isLoggedIn && !isPublicRoute) {
		let callbackUrl = nextUrl.pathname;
		if (nextUrl.search) {
			callbackUrl += nextUrl.search;
		}

		const encodedCallbackUrl = encodeURIComponent(callbackUrl);

		return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
	}

	return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
	// 		"/((?!_next|_next/static|_next/image|api|favicon.ico|robots.txt|assets|pwa).*)", // skip all paths
};

// export function middleware(request: NextRequest) {
// 	const checkAuth = request.cookies.get("app-token");
// 	// Check if there is any supported locale in the pathname
// 	const pathname = request.nextUrl.pathname;
// 	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
// 	// if (checkAuth && pathname.includes("/auth")) {
// 	// 	const [locale] = request.nextUrl.pathname.split("/auth");
// 	// 	request.nextUrl.pathname = `${locale}${pathname}`;
// 	// 	return Response.redirect(request.nextUrl);
// 	// }
// 	if (pathnameHasLocale) return;
// 	// Redirect if there is no locale
// 	const locale: ILocale = getLocale(request);
// 	request.nextUrl.pathname = `/${locale}${pathname}`;
// 	// The new URL
// 	return Response.redirect(request.nextUrl);
// }