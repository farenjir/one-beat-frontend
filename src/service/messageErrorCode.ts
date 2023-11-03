import { createNotification } from "@/utils/Notification";

export interface IError {
	status: number;
	code: string | number;
	message: string;
	appCode: string;
	timestamp: string;
	method: string;
	path: string;
}

export const errorCodeMessage = (appCode: string, message: string, status: number, code: string) => {
	return createNotification({ message: "خطا", type: "error" });
};
