import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import type { ResolvingMetadata, Viewport } from "next";

import "@/assets/styles/globals.css";

import { rootLayoutMetadata } from "@/app/lib/meta/RootLayout";

import { GlobalProps } from "@/types";
import { locales, getLocaleConfigs } from "@/assets/langs";
import { themeColorView } from "@/assets/theme";

import Globals from "@/app/lib/context";

const figtree = Figtree({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-figtree",
	weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const yekan = localFont({
	display: "swap",
	variable: "--font-yekan",
	src: [
		{
			path: "../../assets/fonts/YekanBakh-Regular.woff2",
			style: "normal",
		},
	],
});

export const viewport: Viewport = {
	themeColor: themeColorView,
};

export async function generateMetadata(params: Pick<GlobalProps, "params" | "searchParams">, parent: ResolvingMetadata) {
	return await rootLayoutMetadata(params, parent);
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: Pick<GlobalProps, "params" | "children">) {
	const { lang, dir } = getLocaleConfigs(locale);
	return (
		<html lang={lang} dir={dir} className={`${figtree.variable} ${yekan.variable}`}>
			<body className={yekan.className}>
				<Globals locale={locale}>{children}</Globals>
			</body>
		</html>
	);
}
