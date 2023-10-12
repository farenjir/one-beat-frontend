import { ILocale } from "../langs";

export interface IError {
	error: Error & { digest?: string };
	reset: () => void;
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
