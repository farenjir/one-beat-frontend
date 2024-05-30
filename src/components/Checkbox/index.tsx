"use client";

import { Checkbox, Form } from "antd";

import { Locales } from "@/types";
import { useLocaleConfigs } from "@/app/lib/hooks";

interface ICheckbox {
	name: string;
	label?: string;
	locale?: Locales | undefined;
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
			<Checkbox {...{ checked, disabled }} defaultChecked={initializeValue} className={inputClasses}>
				{label}
			</Checkbox>
		</Form.Item>
	);
};

export default Checkboxes;
