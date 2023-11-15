import type { Metadata, ResolvingMetadata } from "next";

import { getDictionary } from "@/langs";
import { GenerateMetaProps } from "@/types";

export async function rootLayoutMetadata(parameters: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	const {
		searchParams,
		params: { locale },
	} = parameters;
	// getDictionary
	const {
		App: { DEFAULT_TITLE, DESCRIPTION, NAME, TITLE_TEMPLATE },
	} = await getDictionary(locale);
	// return
	return {
		applicationName: NAME,
		title: {
			default: DEFAULT_TITLE,
			template: TITLE_TEMPLATE,
		},
		description: DESCRIPTION,
		manifest: `/assets/${locale}_manifest.json`,
		appleWebApp: {
			capable: true,
			statusBarStyle: "default",
			title: DEFAULT_TITLE,
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
