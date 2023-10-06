export interface ISuccess {
	code: number | string;
	message: string;
	description: string;
	timestamp: string;
	result: object[];
}

export const successCodeMessage = (code: string | number) => {};
