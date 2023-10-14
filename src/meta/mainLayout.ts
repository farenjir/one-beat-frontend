import type { Metadata } from "next";

const APP_NAME = "1Beat";
const APP_DEFAULT_TITLE = "1Beat for You";
const APP_TITLE_TEMPLATE = "%s | 1Beat";
const APP_DESCRIPTION = "1Beat world of Awesome beats !";

export const mainLayoutMetaData: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	themeColor: "#FFFFFF",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE,
		// startUpImage: [],
	},
	manifest: "/assets/manifest.json",
	formatDetection: {
		telephone: false,
	},
	// openGraph: {
	// 	type: "website",
	// 	siteName: APP_NAME,
	// 	title: {
	// 		default: APP_DEFAULT_TITLE,
	// 		template: APP_TITLE_TEMPLATE,
	// 	},
	// 	description: APP_DESCRIPTION,
	// },
	// twitter: {
	// 	card: "summary",
	// 	title: {
	// 		default: APP_DEFAULT_TITLE,
	// 		template: APP_TITLE_TEMPLATE,
	// 	},
	// 	description: APP_DESCRIPTION,
	// },
};
