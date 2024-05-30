import callApi from "@/service";

import type { IUser } from "./app/user";
import type { AppBases, AppTransformBases, UserChildBase } from "./app/base";
import type { IVersion } from "./app/version";
import type { IProduct } from "./app/product";

// data types
export type { AppBases, AppTransformBases, UserChildBase, IVersion, IUser, IProduct };

// configs
export type Dir = "rtl" | "ltr";
export type Locales = "fa" | "en";
export type TypeApi = typeof callApi;

export interface GlobalProps {
	dict: any;
	params: { locale: Locales };
	locale: Locales;
	children: React.ReactNode;
	searchParams: { [key: string]: string | string[] | undefined };
}

export interface ILocaleOptions {
	lang: Locales;
	dir: Dir;
	dirRevert: Dir;
	fontType: "yekan" | "roboto";
	rtl: boolean;
	ltr: boolean;
}
