import localFont from "next/font/local";
import type { Metadata, ResolvingMetadata } from "next";
import { mainLayoutMetadata } from "@/meta/mainLayout";

import "@/assets/styles/global.css";

import { GenerateMetaProps, PropsWithParams } from "@/types/configs";
import { initHTML, locales } from "@/langs";

import GlobalStates from "@/context";

const IRANSans = localFont({
	src: [
		{
			path: "../../assets/fonts/IRANSans-Light.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../assets/fonts/IRANSans-Light.woff",
			weight: "400",
			style: "normal",
		},
	],
});

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(params: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	return await mainLayoutMetadata(params, parent);
}

export default function RootLayout({ children, params: { locale } }: PropsWithParams) {
	const attributes = initHTML[locale];
	return (
		<html {...attributes}>
			<body className={`${IRANSans.className}`}>
				<GlobalStates locale={locale}>{children}</GlobalStates>
			</body>
		</html>
	);
}
