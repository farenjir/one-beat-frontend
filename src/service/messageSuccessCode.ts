import { getDictionary } from "@/langs";
import { createNotification } from "@/utils/notification";

export interface ISuccess<T> {
	code: number | string;
	message: string;
	description: string;
	timestamp: string;
	result: T | T[];
}

export const successCodeMessage = async (code: string | number, message: string, description: string): Promise<void> => {
	const { Services: {Success} } = await getDictionary();
	createNotification({ message: "موفق", type: "success" });
};
