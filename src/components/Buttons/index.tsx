import { Button, Form } from "antd";

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
	onClick = () => {},
	shape = "default",
	size = "middle",
	classes = "",
	prefix = "",
	disabled = false,
	loading = false,
}: IButtons) => {
	return (
		<Form.Item>
			<Button
				{...{ onClick, htmlType, size, shape, type: typeColor, disabled, loading }}
				className={`${styles["btn-public"]}  ${styles[`btn-public__${color}`]} ${classes}`}
			>
				<div className="flex justify-center items-center">
					<span key={"name"}>{name}</span>
					{prefix}
				</div>
			</Button>
		</Form.Item>
	);
};

export default Buttons;
