"use client";

import { useState } from "react";
import { InfoCircleOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Tooltip } from "antd";

import { PropsWithDict } from "@/types";
import { useAppContext } from "@/app/lib/context";

import { userForgatPassword } from "@/app/lib/services/main";

import { Inputs, Buttons } from "@/components";

type Mode = "username" | "email";
interface IForgetForm {
	username?: string;
	email?: string;
}
interface IState {
	username: boolean;
	email: boolean;
	btn?: boolean;
}

const ForgetPassword = ({ dict: { Auth } }: PropsWithDict) => {
	const [{ username, email, btn }, setDisableOtherField] = useState<IState>({
		username: false,
		email: false,
		btn: true,
	});
	// hooks
	const [form] = Form.useForm();
	const { callApi } = useAppContext();
	// handles
	const onFinish = async ({ username: name, email: mail }: IForgetForm) => {
		const formBody = {
			[mail ? "email" : "username"]: mail || name,
		};
		const sentMail = await userForgatPassword<IForgetForm>(callApi, formBody);
		if (sentMail) {
			setDisableOtherField({ username, email, btn: true });
		}
	};
	const handleOnChange = (mount: Mode, unmount: Mode, isNotMounted: boolean) => {
		if (!isNotMounted) {
			setDisableOtherField((perObject) => ({ ...perObject, [mount]: true, [unmount]: false, btn: false }));
			form.setFieldValue(unmount, null);
		}
	};
	// return
	return (
		<Form name="forget-password-form" layout="vertical" form={form} onFinish={onFinish} className="forget-password-form">
			<Inputs
				name="username"
				type="text"
				label={Auth.username}
				prefix={<UserOutlined className="site-form-item-icon" />}
				required={username}
				onChange={() => handleOnChange("username", "email", username)}
			/>
			<Inputs
				name="email"
				type="email"
				label={Auth.email}
				prefix={<MailOutlined className="site-form-item-icon" />}
				required={email}
				onChange={() => handleOnChange("email", "username", email)}
			/>
			<Buttons
				name={Auth.forgetBtn}
				color={btn ? "disabled" : "active"}
				htmlType="submit"
				classes="login-form-button mt-5"
				disabled={btn}
				prefix={
					<Tooltip title={Auth.forgetInfo}>
						<InfoCircleOutlined className="site-info-item-icon mx-2" />
					</Tooltip>
				}
			/>
		</Form>
	);
};

export default ForgetPassword;
