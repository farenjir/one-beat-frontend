export interface ISuccess<T> {
	code: number | string;
	message: string;
	description: string;
	timestamp: string;
	result: T | T[];
}

export const successCodeMessage = (code: string | number, message: string, description: string) => {};
