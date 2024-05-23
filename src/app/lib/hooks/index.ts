"use client";

import { useEffect, useState } from "react";

import { ILocale, ILocaleOptions } from "@/types";

import { defaultLocale, getDictionary } from "@/assets/langs";
import { getLocaleConfigs, localeOptions as locales } from "@/utils/global";

export const useLocaleConfigs = (currentLocale?: ILocale | undefined) => {
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
