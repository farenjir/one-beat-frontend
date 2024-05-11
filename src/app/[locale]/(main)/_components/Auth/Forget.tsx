"use client";

import { useRef, useState } from "react";
import { InfoCircleOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

import { PropsWithDict } from "@/types";
import { useAppContext } from "@/app/lib/context";

import { userForgatPassword } from "@/app/lib/services/main/client";

import { Inputs, Buttons, Forms, formType } from "@/components";

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
	const { callApi } = useAppContext();
	const formRef = useRef<formType>();
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
			formRef?.current?.setFieldValue(unmount, null);
		}
	};
	// return
	return (
		<Forms name="forget-password-form" onFinish={onFinish} ref={formRef}>
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
		</Forms>
	);
};

export default ForgetPassword;
