import callApi from "@/service";

export type ILocale = "fa" | "en";

export type IDir = "rtl" | "ltr";

export interface ILocaleOptions {
	lang: ILocale;
	dir: IDir;
	fontType: "yekan" | "roboto";
	rtl: boolean;
	ltr: boolean;
	locale: any; // antDictionaries
}
export interface GenerateMetaProps {
	params: { locale: ILocale };
	searchParams: { [key: string]: string | string[] | undefined };
}
export interface IParams {
	params: { locale: ILocale };
}

export type PropsWithDict = {
	dict: any;
};

export type PropsWithLocale = { locale: ILocale };

export type PropsWithParams = IParams & {
	children: React.ReactNode;
};

export type TypeApi = typeof callApi;
