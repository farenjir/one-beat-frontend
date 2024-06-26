import { Button } from "antd";
import FormItems from "../Forms/FormItem";

import styles from "./button.module.css";

interface IButtons {
	name: string;
	typeColor?: "default" | "primary" | "dashed" | "link" | "text";
	color?: "success" | "active" | "danger" | "secondary" | "disabled" | "cancel";
	shape?: "default" | "circle" | "round";
	size?: "large" | "middle" | "small";
	htmlType?: "submit" | "button" | "reset";
	classes?: string;
	onClick?: () => void | undefined;
	prefix?: any;
	disabled?: boolean;
	loading?: boolean;
}

const Buttons = ({
	name = "",
	htmlType = "button",
	color = "active",
	typeColor = "default",
	shape = "default",
	size = "middle",
	classes = "",
	prefix = "",
	disabled = false,
	loading = false,
	...props
}: IButtons) => {
	return (
		<FormItems>
			<Button
				{...{ htmlType, size, shape, type: typeColor, disabled, loading, ...props }}
				className={`${styles["btn-public"]}  ${styles[`btn-public__${color}`]} ${classes}`}
			>
				<div className="flex justify-center items-center">
					<span key={"name"}>{name}</span>
					{prefix}
				</div>
			</Button>
		</FormItems>
	);
};

export default Buttons;
