import { defaultLocale } from "@/assets/langs";
import { ILocale, ILocaleOptions } from "@/types";

import { getFromCookie } from "./storage";

export const localeOptions: { [key: string]: ILocaleOptions } = {
	fa: { lang: "fa", dir: "rtl", dirRevert: "ltr", rtl: true, ltr: false, fontType: "yekan" },
	en: { lang: "en", dir: "ltr", dirRevert: "rtl", rtl: false, ltr: true, fontType: "roboto" },
};
export const getLocaleConfigs = (locale?: ILocale | undefined) => {
	const currentLang: ILocale = locale ?? getFromCookie("locale") ?? defaultLocale;
	return localeOptions[currentLang];
};

// ***
export const uIdMaker = (uIdLength = 20) => {
	let codePattern = "1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p";
	let pl = codePattern.length;
	let uId = "";
	for (let idx = 0; idx < uIdLength; idx++) {
		let randomNumber = Math.floor(Math.random() * pl);
		uId += codePattern[randomNumber];
	}
	return uId;
};
