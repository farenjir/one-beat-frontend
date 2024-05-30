"use client";

import { Checkbox, Form } from "antd";

import { useAppContext } from "@/app/lib/context";

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
	required = true,
	classes = "",
	inputClasses = "",
	checked = undefined,
}: ICheckbox) => {
	const { dict } = useAppContext();
	// rules
	const rules = [
		{
			required: required,
			message: dict?.Schemas?.required,
		},
	];
	return (
		<Form.Item {...{ name, initializeValue, rules, disabled }} valuePropName="checked" noStyle className={classes}>
			<Checkbox {...{ checked, disabled }} defaultChecked={initializeValue} className={inputClasses}>
				{label}
			</Checkbox>
		</Form.Item>
	);
};

export default Checkboxes;
