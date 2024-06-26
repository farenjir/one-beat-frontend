"use client";

import { useEffect, useState } from "react";

import { Locales, ILocaleOptions } from "@/types";

import { defaultLocale, getDictionary, getLocaleConfigs, localeOptions as locales } from "@/assets/langs";

export const useLocaleConfigs = (currentLocale?: Locales | undefined) => {
	const [locale, setLocale] = useState<{
		dict?: typeof getDictionary.arguments;
		localeConfigs: ILocaleOptions;
	}>({
		localeConfigs: locales[currentLocale || defaultLocale],
	});
	// init
	useEffect(() => {
		const getDict = async () => {
			const localeConfigs = getLocaleConfigs(currentLocale);
			const dict = await getDictionary(currentLocale || localeConfigs?.lang);
			setLocale({ dict, localeConfigs } as any);
		};
		getDict();
	}, [currentLocale]);
	// return
	return locale;
};
