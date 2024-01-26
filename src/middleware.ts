import NextAuth from "next-auth";

import { DEFAULT_LOCALE, locales } from "./langs";

import { Roles } from "./types/configs/enums";

import authConfig from "./service/auth/auth.config";

/**
 * An array of routes that are used for authentication
 */
const authRoutes: string[] = ["/auth", "/auth/error"];
const loggedRoutes: string[] = [`/${Roles.Admin}`, `/${Roles.Producer}`, `/${Roles.User}`];
/**
 * The default redirect path after logging in
 */
const DEFAULT_AUTH_REDIRECT: string = "/auth";
const DEFAULT_LOGGED_REDIRECT: Record<Roles, string> = {
	[Roles.Admin]: `/${Roles.Admin}`,
	[Roles.Author]: `/${Roles.Admin}`,
	[Roles.Editor]: `/${Roles.Admin}`,
	[Roles.Producer]: `/${Roles.Producer}`,
	[Roles.User]: `/${Roles.User}`,
};
/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */
const handleAuthRoutes = (pathname: string): boolean => {
	return !authRoutes.some((route) => pathname.includes(route));
};
const handleLoggedRoutes = (pathname: string): boolean => {
	return !loggedRoutes.some((route) => pathname.includes(route));
};

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const { value: locale }: { value: string } = req.cookies.get("locale") || { value: DEFAULT_LOCALE };
	// check lang with pathname
	if (!locales.some((locale) => nextUrl.pathname.startsWith(`/${locale}/`) || nextUrl.pathname === `/${locale}`)) {
		nextUrl.pathname = `/${locale}${nextUrl.pathname}`;
	}
	// check conditions
	const isLoggedIn = !!req.auth;
	const isAuthRoute = handleAuthRoutes(nextUrl.pathname);
	const isLoggedRoute = handleLoggedRoutes(nextUrl.pathname);
	// actions
	if (isAuthRoute) {
		if (isLoggedIn) {
			const loggedPath: string = DEFAULT_LOGGED_REDIRECT[req?.auth?.user?.role || "user"];
			return Response.redirect(new URL(`${locale}${loggedPath}`, nextUrl));
		}
		return null;
	}
	// actions
	if (isLoggedRoute) {
		if (isLoggedIn) {
			const loggedPath: string = DEFAULT_LOGGED_REDIRECT[req?.auth?.user?.role || "user"];
			return Response.redirect(new URL(`${locale}${loggedPath}`, nextUrl));
		}
		return Response.redirect(new URL(`${locale}${DEFAULT_AUTH_REDIRECT}`, nextUrl));
	}
	return null;
});

// don't invoke Middleware on some paths
export const config = {
	matcher: ["/((?!_next|_next/static|_next/image|api|favicon.ico|robots.txt|assets|pwa).*)"], // skip lang pathnames
	// matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// if (!isLoggedIn && !isPublicRoute) {
// 	let callbackUrl = nextUrl.pathname;
// 	if (nextUrl.search) {
// 		callbackUrl += nextUrl.search;
// 	}

// 	const encodedCallbackUrl = encodeURIComponent(callbackUrl);

// 	return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
// }

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
