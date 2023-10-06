/** @type {import('next').NextConfig} */

module.exports = {
	i18n: {
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
				http: true,
			},
		],
	},
};
