import localFont from "next/font/local";
import type { Metadata, ResolvingMetadata, Viewport } from "next";

import "@/assets/styles/global.css";

import { rootLayoutMetadata } from "@/app/lib/meta/RootLayout";

import { GlobalProps } from "@/types";
import { locales, getLocaleConfigs } from "@/assets/langs";
import { themeColorView } from "@/assets/theme";

import Globals from "@/app/lib/context";

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

export const viewport: Viewport = {
	themeColor: themeColorView,
};

export async function generateMetadata(
	params: Pick<GlobalProps, "params" | "searchParams">,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	return await rootLayoutMetadata(params, parent);
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: Pick<GlobalProps, "params" | "children">) {
	const { lang, dir } = getLocaleConfigs(locale);
	return (
		<html lang={lang} dir={dir} className={`${yekan.variable}`}>
			<body className={yekan.className}>
				<Globals locale={locale}>{children}</Globals>
			</body>
		</html>
	);
}
