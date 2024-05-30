import { ILocaleOptions, Locales } from "@/types";
import { getFromCookie } from "@/utils/storage";

export const localeOptions: { [key: string]: ILocaleOptions } = {
	fa: { lang: "fa", dir: "rtl", dirRevert: "ltr", rtl: true, ltr: false, fontType: "yekan" },
	en: { lang: "en", dir: "ltr", dirRevert: "rtl", rtl: false, ltr: true, fontType: "roboto" },
};
export const getLocaleConfigs = (locale?: Locales | undefined) => {
	const currentLang: Locales = locale ?? getFromCookie("locale") ?? defaultLocale;
	return localeOptions[currentLang];
};

export const locales: Locales[] = ["fa", "en"];

export const [defaultLocale] = locales;

const dictionaries = {
	fa: () => import("./fa.json").then((module) => module.default),
	en: () => import("./fa.json").then((module) => module.default),
};

export const getDictionary = async (locale?: Locales) => {
	const { lang } = getLocaleConfigs(locale);
	return await dictionaries[locale || lang]();
};
