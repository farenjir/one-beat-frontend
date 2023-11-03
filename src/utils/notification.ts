import { notification } from "antd";
import { getLocaleConfigs } from "./global";

interface INotifications {
	message: string;
	type?: "success" | "info" | "warning" | "error";
	position?: "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight" | undefined;
	role?: "alert" | "status";
	description?: string;
	duration?: number;
	top?: number;
	maxCount?: number;
	closeIcon?: boolean;
}

export const createNotification = ({
	message,
	type = "info",
	description = "",
	duration = 5,
	position = undefined,
	closeIcon = true,
	top = 50,
	maxCount = 2,
}: INotifications): void => {
	const { rtl } = getLocaleConfigs();
	const placement = position || (rtl ? "topLeft" : "topRight");
	// configs
	notification.config({
		duration,
		placement,
		closeIcon,
		rtl,
		top,
		maxCount,
	});
	// return
	return notification[type]({
		message,
		description,
	});
};
