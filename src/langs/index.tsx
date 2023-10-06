import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

interface ILang {
	children: ReactNode;
	locale: "fa" | "en";
	pathSection: "main" | "admin";
}

export default async function NextLanguageProvider({ children, locale = "fa", pathSection = "main" }: ILang) {
	const messages = (await import(`./${locale}/${pathSection}.json`)).default;
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}
