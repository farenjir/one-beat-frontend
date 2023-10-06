import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["fa", "en"],
	defaultLocale: "fa",
	domains: [
		// {
		// 	domain: "example.ir",
		// 	defaultLocale: "fa",
		// },
		// {
		// 	domain: "example.com",
		// 	defaultLocale: "en",
		// },
		{
			domain: "localhost",
			defaultLocale: "fa",
		},
	],
});

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
