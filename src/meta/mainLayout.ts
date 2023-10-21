import type { Metadata, ResolvingMetadata } from "next";

import { GenerateMetaProps } from "@/types/configs";

import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "./common";

export async function mainLayoutMetadata(parameters: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { params, searchParams } = parameters;
	return await {
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
		manifest: `/${params.locale}/assets/manifest.json`,
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
}
