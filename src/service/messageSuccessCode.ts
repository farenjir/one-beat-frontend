export interface ISuccess {
	code: number | string;
	message: string;
	description: string;
	timestamp: string;
	result: object | object[];
}

export const successCodeMessage = (code: string | number) => {};
