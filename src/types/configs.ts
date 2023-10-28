import { ILocale } from "../langs";

export type GenerateMetaProps = {
	params: { locale: ILocale };
	searchParams: { [key: string]: string | string[] | undefined };
};
export interface IParams {
	params: { locale: ILocale };
}

export type PropsWithParams = IParams & {
	children: React.ReactNode;
};

export type PropsWithDice = {
	dict: any;
};
