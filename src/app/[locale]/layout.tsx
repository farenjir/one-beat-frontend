import type { Metadata, ResolvingMetadata } from "next";

import { mainLayoutMetadata } from "@/meta/mainLayout";

import "@/assets/styles/global.css";
import fonts from "./fonts";

import { GenerateMetaProps, PropsWithParams } from "@/types";
import { getLocaleConfigs } from "@/utils/global";
import { locales } from "@/langs";

import GlobalStates from "@/context";

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(params: GenerateMetaProps, parent: ResolvingMetadata): Promise<Metadata> {
	return await mainLayoutMetadata(params, parent);
}

export default function RootLayout({ children, params: { locale } }: PropsWithParams) {
	const { lang, dir, fontType } = getLocaleConfigs(locale);
	return (
		<html lang={lang} dir={dir} className={`${fonts.yekan.variable} ${fonts.roboto.variable} font-${fontType}`}>
			<body className={`${fonts[fontType].className}`}>
				<GlobalStates locale={locale}>{children}</GlobalStates>
			</body>
		</html>
	);
}
