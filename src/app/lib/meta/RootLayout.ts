import type { Metadata, ResolvingMetadata } from "next";

import { getDictionary } from "@/assets/langs";
import { GenerateMetaProps } from "@/types";

export async function rootLayoutMetadata(parameters: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	const {
		searchParams,
		params: { locale },
	} = parameters;
	// getDictionary
	const {
		App: { appName, appDescription, defaultTitle, titleTemplate },
	} = await getDictionary(locale);
	// return
	return {
		applicationName: appName,
		title: {
			default: defaultTitle,
			template: titleTemplate,
		},
		description: appDescription,
		manifest: `/assets/${locale}_manifest.json`,
		appleWebApp: {
			capable: true,
			statusBarStyle: "default",
			title: defaultTitle,
			// startUpImage: [],
		},
		formatDetection: {
			telephone: false,
		},
		// openGraph: {
		// 	type: "website",
		// 	siteName: NAME,
		// 	title: {
		// 		default: DEFAULT_TITLE,
		// 		template: TITLE_TEMPLATE,
		// 	},
		// 	description: DESCRIPTION,
		// },
		// twitter: {
		// 	card: "summary",
		// 	title: {
		// 		default: DEFAULT_TITLE,
		// 		template: TITLE_TEMPLATE,
		// 	},
		// 	description: DESCRIPTION,
		// },
	};
}
