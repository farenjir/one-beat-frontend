import { getDictionary } from "@/assets/langs";
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

export const successCodeMessage = async (code: string | number, message: string, description: string): Promise<void> => {
	// getDictionary
	const {
		Services: { Success },
	}: SuccessType = await getDictionary();
	// description
	const haveDescription = Success[`${code}Des`];
	// return notification
	Success[code] &&
		createNotification({
			message: haveDescription ? Success[code] : Success["success"],
			description: haveDescription || Success[code],
			type: "success",
		});
};
