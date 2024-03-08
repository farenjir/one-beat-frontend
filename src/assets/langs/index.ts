import { ILocale } from "@/types";
import { getLocaleConfigs } from "@/utils/global";

export const locales: ILocale[] = ["fa", "en"];

export const [defaultLocale] = locales;

const dictionaries = {
	fa: () => import("./fa.json").then((module) => module.default),
	en: () => import("./fa.json").then((module) => module.default),
};

export const getDictionary = async (locale?: ILocale) => {
	const { lang } = getLocaleConfigs(locale);
	return await dictionaries[locale || lang]();
};
