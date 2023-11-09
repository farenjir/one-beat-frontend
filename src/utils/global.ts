import { ILocale, ILocaleOptions } from "@/types";
import { getFromCookie } from "./cookie";

export const localeOptions: ILocaleOptions = {
	fa: { lang: "fa", dir: "rtl", rtl: true, ltr: false, fontType: "yekan" },
	en: { lang: "en", dir: "ltr", rtl: false, ltr: true, fontType: "roboto" },
};

export const getLocaleConfigs = (locale?: ILocale | undefined) => {
	const currentLang: ILocale = locale ?? getFromCookie("locale") ?? "fa";
	return localeOptions[currentLang];
};
