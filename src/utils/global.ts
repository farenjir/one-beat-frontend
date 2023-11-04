import { ILocale, ILocaleOptions } from "@/types";

export const localeOptions: ILocaleOptions = {
	fa: { lang: "fa", dir: "rtl", rtl: true, ltr: false },
	en: { lang: "en", dir: "ltr", rtl: false, ltr: true },
};

export const getLocaleConfigs = (locale?: ILocale | undefined) => {
	const currentLang: ILocale = locale ?? (window?.location?.pathname?.includes("/en") ? "en" : "fa");
	return localeOptions[currentLang];
};
