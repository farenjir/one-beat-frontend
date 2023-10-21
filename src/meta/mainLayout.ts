import type { Metadata, ResolvingMetadata } from "next";

import { GenerateMetaProps } from "@/types/configs";
import { getDictionary } from "@/langs";

export async function mainLayoutMetadata(parameters: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { params, searchParams } = parameters;
	// getDictionary
	const {
		App: { DEFAULT_TITLE, DESCRIPTION, NAME, TITLE_TEMPLATE },
	} = await getDictionary(params.locale);
	// return
	return {
		applicationName: NAME,
		title: {
			default: DEFAULT_TITLE,
			template: TITLE_TEMPLATE,
		},
		description: DESCRIPTION,
		themeColor: "#FFFFFF",
		appleWebApp: {
			capable: true,
			statusBarStyle: "default",
			title: DEFAULT_TITLE,
			// startUpImage: [],
		},
		manifest: `/assets/${params.locale}_manifest.json`,
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
