import { Checkbox } from "antd";
import FormItems from "../Forms/FormItem";

interface ICheckbox {
	name: string;
	label?: string;
	initializeValue?: any;
	checked?: boolean | undefined;
	classes?: string;
	inputClasses?: string;
	required?: boolean;
	disabled?: boolean;
}
const Checkboxes = ({
	name = "",
	label = "",
	initializeValue = undefined,
	disabled = false,
	required = false,
	classes = "",
	inputClasses = "",
	checked = undefined,
}: ICheckbox) => {
	return (
		<FormItems {...{ name, initializeValue, required, classes }} valuePropName="checked" noStyle>
			<Checkbox {...{ checked, disabled }} defaultChecked={initializeValue} className={inputClasses}>
				{label}
			</Checkbox>
		</FormItems>
	);
};

export default Checkboxes;
