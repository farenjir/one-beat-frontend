"use client";

import { useEffect, useState } from "react";

import { ILocale, ILocaleOptions } from "@/types";

import { getDictionary } from "@/langs";
import { getLocaleConfigs } from "@/utils/global";

export const useLocaleConfigs = (currentLocale?: ILocale | undefined) => {
	const [locale, setLocale] = useState<{
		dict?: typeof getDictionary.arguments;
		locale?: ILocaleOptions;
	}>({});
	// init
	useEffect(() => {
		const getDict = async () => {
			const localeConfigs = getLocaleConfigs(currentLocale);
			const dict = await getDictionary(currentLocale || localeConfigs?.lang);
			setLocale({ dict, locale: localeConfigs } as any);
		};
		getDict();
	}, [currentLocale]);
	// return
	return locale;
};
