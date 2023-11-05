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

type ErrorsType = {
	Services: {
		Errors: {
			[key: string | number]: string;
		};
	};
};

const exceptionPathMessages = ["/user/whoAmI"];

export const errorCodeMessage = async (
	appCode: string,
	status: number,
	message: string,
	code: string,
	method: string,
	path: string,
): Promise<void> => {
	// exceptions
	if (exceptionPathMessages.includes(path)) {
		return;
	}
	// getDictionary
	const {
		Services: { Errors },
	}: ErrorsType = await getDictionary();
	// return notification
	createNotification({
		message: Errors["error"],
		description: Errors[appCode ?? status] || Errors["default"],
		type: "error",
	});
};
