import localFont from "next/font/local";
import type { Metadata, ResolvingMetadata } from "next";

import { rootLayoutMetadata } from "@/meta/RootLayout";

import "@/assets/styles/global.css";
import "@/assets/styles/antd.overwrite.css";

import { GenerateMetaProps, PropsWithParams } from "@/types";
import { getLocaleConfigs } from "@/utils/global";
import { locales } from "@/langs";

import Globals from "@/context";

const yekan = localFont({
	variable: "--font-yekan",
	display: "swap",
	src: [
		{
			path: "../../assets/fonts/YekanBakh-Regular.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../assets/fonts/YekanBakh-Regular.woff",
			weight: "500",
			style: "normal",
		},
	],
});

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(params: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	return await rootLayoutMetadata(params, parent);
}

export default function RootLayout({ children, params: { locale } }: PropsWithParams) {
	const { lang, dir } = getLocaleConfigs(locale);
	return (
		<html lang={lang} dir={dir} className={`${yekan.variable}`}>
			<body className={`${yekan.className} bg-black`}>
				<Globals locale={locale}>{children}</Globals>
			</body>
		</html>
	);
}
