"use client";

import { useEffect, useState } from "react";

import { ILocale, ILocaleOptions } from "@/types";

import { getDictionary } from "@/assets/langs";
import { getLocaleConfigs } from "@/utils/global";

export const useLocaleConfigs = (currentLocale?: ILocale | undefined) => {
	const [locale, setLocale] = useState<{
		dict?: typeof getDictionary.arguments;
		localeConfigs?: ILocaleOptions;
	}>({});
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