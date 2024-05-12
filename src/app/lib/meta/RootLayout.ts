import type { Metadata, ResolvingMetadata, Viewport } from "next";

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

// import type { Metadata, Viewport } from "next";

// const APP_NAME = "PWA App";
// const APP_DEFAULT_TITLE = "My Awesome PWA App";
// const APP_TITLE_TEMPLATE = "%s - PWA App";
// const APP_DESCRIPTION = "Best PWA app in the world!";

// export const metadata: Metadata = {
//   applicationName: APP_NAME,
//   title: {
//     default: APP_DEFAULT_TITLE,
//     template: APP_TITLE_TEMPLATE,
//   },
//   description: APP_DESCRIPTION,
//   manifest: "/manifest.json",
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "default",
//     title: APP_DEFAULT_TITLE,
//     // startUpImage: [],
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     siteName: APP_NAME,
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
//   twitter: {
//     card: "summary",
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
// };
