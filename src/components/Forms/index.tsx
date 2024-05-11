import { Form, FormInstance } from "antd";
import { ReactNode, forwardRef, useImperativeHandle } from "react";

interface IForm {
	children: ReactNode;
	onFinish: (values: any) => Promise<void>;
	name?: string;
	classes?: string;
	initialValues?: object | undefined;
	layout?: "horizontal" | "vertical" | "inline";
}

export type formType = FormInstance;

export const Forms = forwardRef(function FormWithRef(
	{ children, onFinish, name = "form", initialValues = undefined, classes = "", layout = "vertical" }: IForm,
	ref,
) {
	const [form] = Form.useForm();
	useImperativeHandle(ref, () => form, [form]);
	return (
		<Form
			name={name}
			form={form}
			className={`${name} ${classes}`}
			layout={layout}
			onFinish={onFinish}
			initialValues={initialValues}
		>
			{children}
		</Form>
	);
});
