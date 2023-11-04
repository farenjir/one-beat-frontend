export type ILocale = "fa" | "en";

export type IDir = "rtl" | "ltr";

export interface ILocaleOptions {
	[key: string]: { lang: ILocale; dir: IDir; rtl: boolean; ltr: boolean };
}
export interface GenerateMetaProps {
	params: { locale: ILocale };
	searchParams: { [key: string]: string | string[] | undefined };
}
export interface IParams {
	params: { locale: ILocale };
}

export type PropsWithParams = IParams & {
	children: React.ReactNode;
};

export type PropsWithDice = {
	dict: any;
};
