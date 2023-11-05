import { getDictionary } from "@/langs";
import { createNotification } from "@/utils/notification";

export interface ISuccess<T> {
	code: number | string;
	message: string;
	description: string;
	timestamp: string;
	result: T | T[];
}

type SuccessType = {
	Services: {
		Success: {
			[key: string | number]: string;
		};
	};
};

export const successCodeMessage = async (
	code: string | number,
	message: string,
	description: string,
): Promise<void> => {
	// getDictionary
	const {
		Services: { Success },
	}: SuccessType = await getDictionary();
	// return notification
	createNotification({
		message: Success["error"],
		description: Success[code] || Success["default"],
		type: "success",
	});
};
