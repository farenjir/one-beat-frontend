import { getDictionary } from "@/langs";
import { createNotification } from "@/utils/notification";

export interface IError {
	status: number;
	code: string | number;
	message: string;
	appCode: string;
	timestamp: string;
	method: string;
	path: string;
}

export const errorCodeMessage = async (appCode: string, message: string, status: number, code: string): Promise<void> => {
	const { Services: {Errors} } = await getDictionary();
	createNotification({ message: "خطا", type: "error" });
};
