import { Input, InputNumber } from "antd";
import FormItems from "../Forms/FormItem";

const { TextArea } = Input;

interface IInputs {
	type: "text" | "password" | "number" | "textarea" | "email";
	name: string;
	label?: string;
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
	placeholder = "",
	initializeValue = undefined,
	value = undefined,
	prefix = undefined,
	// common
	size = "middle",
	classes = "",
	inputClasses = "",
	required = false,
	disabled = false,
	maxlength = undefined,
	minLength = undefined,
	// number
	max = 999,
	min = 1,
	// textArea
	autoSize = false,
	...props
}: IInputs) => {
	// return
	return (
		<FormItems
			{...{
				classes,
				label,
				name,
				initializeValue,
				required,
			}}
		>
			{type === "number" ? (
				<InputNumber
					disabled={disabled}
					className={inputClasses}
					size={size}
					min={min}
					max={max}
					defaultValue={initializeValue}
					placeholder={placeholder}
					{...props}
				/>
			) : type === "textarea" ? (
				<TextArea
					className={classes}
					placeholder={placeholder}
					disabled={disabled}
					autoSize={autoSize}
					size={size}
					defaultValue={initializeValue}
				/>
			) : (
				<Input
					prefix={prefix}
					name={name}
					type={type}
					placeholder={placeholder}
					className={inputClasses}
					size={size}
					disabled={disabled}
					defaultValue={initializeValue}
					maxLength={maxlength}
					minLength={minLength}
					value={value}
					{...props}
				/>
			)}
		</FormItems>
	);
};

export default Inputs;
