"use client";

import { useEffect, useState } from "react";

import { ILocale } from "@/types";

import { getDictionary } from "@/langs";
import { getLocaleConfigs } from "@/utils/global";

export const useLocaleConfigs = (currentLocale?: ILocale | undefined) => {
	const [locale, setLocale] = useState({});
	// init
	useEffect(() => {
		const getDict = async () => {
			const localeConfigs = getLocaleConfigs(currentLocale);
			const dict = await getDictionary(currentLocale || localeConfigs?.lang);
			setLocale({ dict, locale: localeConfigs });
		};
		getDict();
	}, [currentLocale]);
	// return
	return locale;
};
