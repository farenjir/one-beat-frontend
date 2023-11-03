import { ILocale } from "@/langs";

export const getLocaleConfigs = () => {
	const currentLang: ILocale = window?.location?.pathname?.includes("/en") ? "en" : "fa";
	const initHTML = {
		fa: { lang: "fa", dir: "rtl", rtl: true, ltr: false },
		en: { lang: "en", dir: "ltr", rtl: false, ltr: true },
	};
	return initHTML[currentLang];
};
