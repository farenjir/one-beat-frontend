"use client";

import { Checkbox, Form } from "antd";

import { ILocale } from "@/types";
import { useLocaleConfigs } from "@/hooks";

interface ICheckbox {
	name: string;
	label?: string;
	locale?: ILocale | undefined;
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
	locale = undefined,
}: ICheckbox) => {
	const { dict } = useLocaleConfigs(locale);
	// rules
	const rules = [
		{
			required: required,
			message: dict?.Schemas?.required,
		},
	];
	return (
		<Form.Item {...{ name, initializeValue, rules, disabled }} valuePropName="checked" noStyle className={classes}>
			<Checkbox defaultChecked={initializeValue} checked={checked} disabled={disabled} className={inputClasses}>
				{label}
			</Checkbox>
		</Form.Item>
	);
};

export default Checkboxes;
