import { Form, Input, InputNumber } from "antd";

import { ILocale } from "@/types";
import { useLocaleConfigs } from "@/app/lib/hooks";

const { TextArea } = Input;
interface IInputs {
	type: "text" | "password" | "number" | "textArea" | "email";
	name: string;
	label?: string;
	locale?: ILocale | undefined;
	placeholder?: string;
	onChange?: () => void;
	initializeValue?: any;
	value?: any;
	prefix?: any;
	// common
	size?: "middle" | "large" | "small";
	classes?: string;
	inputClasses?: string;
	required?: boolean;
	disabled?: boolean;
	maxlength?: undefined | number;
	minLength?: undefined | number;
	// number
	max?: number;
	min?: number;
	// textArea
	autoSize?: boolean;
}

const Inputs = ({
	type = "text",
	label = "",
	name = "",
	locale = undefined,
	placeholder = "",
	onChange = () => {},
	initializeValue = undefined,
	value = undefined,
	prefix = undefined,
	// common
	size = "middle",
	classes = "",
	inputClasses = "",
	required = true,
	disabled = false,
	maxlength = undefined,
	minLength = undefined,
	// number
	max = 999,
	min = 1,
	// textArea
	autoSize = false,
}: IInputs) => {
	const { dict } = useLocaleConfigs(locale);
	// InputSelected
	const inputSelected = ({ type = "text" }) => {
		switch (type) {
			case "number":
				return (
					<InputNumber
						disabled={disabled}
						onChange={onChange}
						className={inputClasses}
						size={size}
						min={min}
						max={max}
						defaultValue={initializeValue}
						placeholder={placeholder}
					/>
				);
			case "textarea":
				return (
					<TextArea
						className={classes}
						placeholder={placeholder}
						disabled={disabled}
						autoSize={autoSize}
						size={size}
						defaultValue={initializeValue}
					/>
				);
			default:
				return (
					<Input
						prefix={prefix}
						name={name}
						type={type}
						placeholder={placeholder}
						className={inputClasses}
						onChange={onChange}
						size={size}
						disabled={disabled}
						defaultValue={initializeValue}
						maxLength={maxlength}
						minLength={minLength}
						value={value}
					/>
				);
		}
	};
	// rules
	const rules = [
		{
			required: required,
			message: dict?.Schemas?.required,
		},
	];
	// return
	return (
		<Form.Item
			labelCol={{ xs: 24 }}
			wrapperCol={{ xs: 24 }}
			className={classes}
			label={label}
			name={name}
			initialValue={initializeValue}
			rules={rules}
		>
			{inputSelected({ type })}
		</Form.Item>
	);
};

export default Inputs;
