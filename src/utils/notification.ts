import { notification } from "antd";
import { getLocaleConfigs } from "@/assets/langs";

interface INotifications {
	message: string;
	type?: "success" | "info" | "warning" | "error";
	position?: "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight" | undefined;
	role?: "alert" | "status";
	description?: string;
	duration?: number;
	top?: number;
	bottom?: number;
	maxCount?: number;
	closeIcon?: boolean;
}

export const createNotification = ({
	message,
	type = "info",
	description = "",
	position = undefined,
	duration = 5,
	closeIcon = true,
}: INotifications): void => {
	const { rtl } = getLocaleConfigs();
	// configs
	notification.config({
		duration,
		placement: position || (rtl ? "bottomLeft" : "bottomRight"),
		rtl,
		closeIcon,
	});
	// return
	return notification[type]({
		key: message,
		message,
		description,
	});
};
