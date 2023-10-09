import "server-only";

export type ILocale = "fa" | "en";

export const locales = ["fa", "en"];

export const defaultLocale = "fa";

const dictionaries = {
	fa: () => import("./fa.json").then((module) => module.default),
	en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: ILocale) => await dictionaries[locale || defaultLocale]();
