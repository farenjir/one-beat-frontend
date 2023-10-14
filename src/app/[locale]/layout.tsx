import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/assets/styles/global.css";

import GlobalStates from "@/context";
import { mainLayoutMetaData } from "@/meta/mainLayout";
import { initHTML, locales } from "@/langs";
import { PropsWithParams } from "@/types/configs";

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

export const metadata: Metadata = mainLayoutMetaData;

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
