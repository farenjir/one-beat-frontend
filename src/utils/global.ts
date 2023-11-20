import en from "antd/locale/en_US";
import fa from "antd/locale/fa_IR";

import { ILocale, ILocaleOptions } from "@/types";

import { getFromCookie } from "./cookie";
import { defaultLocale } from "@/langs";

export const localeOptions: { [key: string]: ILocaleOptions } = {
	fa: { lang: "fa", dir: "rtl", rtl: true, ltr: false, fontType: "yekan", locale: fa },
	en: { lang: "en", dir: "ltr", rtl: false, ltr: true, fontType: "roboto", locale: en },
};

export const getLocaleConfigs = (locale?: ILocale | undefined) => {
	const currentLang: ILocale = locale ?? getFromCookie("locale") ?? defaultLocale;
	return localeOptions[currentLang];
};
