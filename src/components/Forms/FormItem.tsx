"use client";

import { Form } from "antd";

import { useAppContext } from "@/app/lib/context";
import { GlobalProps } from "@/types";

const { Item: FormItem } = Form;

interface IFormItems {
	name?: string;
	label?: string;
	classes?: string;
	initializeValue?: any;
	required?: boolean;
	requiredMessage?: string;
	valuePropName?: "checked";
	noStyle?: boolean;
	disabled?: boolean;
}

const FormItems = ({
	children,
	classes = "",
	label = "",
	name = "",
	initializeValue,
	valuePropName,
	required = false,
	noStyle = false,
}: Pick<GlobalProps, "children"> & IFormItems) => {
	const { dict } = useAppContext();
	// rules
	const rules = [
		{
			required: required,
			message: dict?.Schemas?.required || "",
		},
	];
	return (
		<>
			<FormItem
				labelCol={{ xs: 24 }}
				wrapperCol={{ xs: 24 }}
				rules={rules}
				label={label}
				name={name}
				className={classes}
				initialValue={initializeValue}
				valuePropName={valuePropName}
				noStyle={noStyle}
			>
				{children}
			</FormItem>
		</>
	);
};

export default FormItems;
