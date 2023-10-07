import "server-only";

export type IParams = {
	params: {
		locale: "fa" | "en";
	};
};

export const locales = ["fa", "en"];

const dictionaries = {
	fa: () => import("./fa.json").then((module) => module.default),
	en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "fa" | "en") => dictionaries[locale]();
