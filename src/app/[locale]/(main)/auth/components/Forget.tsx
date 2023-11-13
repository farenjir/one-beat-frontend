import { useState } from "react";
import { InfoCircleOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Tooltip } from "antd";

import { PropsWithDice } from "@/types";
import { useAppContext } from "@/context";

import { userForgatPassword } from "../../_library/services";
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

const ForgetPassword = ({ dict: { Auth } }: PropsWithDice) => {
	const [disableOtherField, setDisableOtherField] = useState<IState>({
		username: true,
		email: true,
		btn: false,
	});
	// hooks
	const { callApi } = useAppContext();
	// handles
	const onFinish = async ({ username, email }: IForgetForm) => {
		const formBody = {
			[email ? "email" : "username"]: email || username,
		};
		const sentMail = await userForgatPassword<IForgetForm>(callApi, formBody);
		if (sentMail) {
			Object.assign(disableOtherField, { btn: true });
			setDisableOtherField(disableOtherField);
		}
	};
	const handleOnChange = (mount: Mode, unmount: Mode) => {
		setDisableOtherField({ ...disableOtherField, [mount]: true, [unmount]: false });
	};
	// return
	return (
		<Form name="forget-password-form" className="forget-password-form" layout="vertical" onFinish={onFinish}>
			<Inputs
				name="username"
				type="text"
				label={Auth.username}
				prefix={<UserOutlined className="site-form-item-icon" />}
				required={disableOtherField.username}
				onChange={() => handleOnChange("username", "email")}
			/>
			<Inputs
				name="email"
				type="email"
				label={Auth.email}
				prefix={<MailOutlined className="site-form-item-icon" />}
				required={disableOtherField.email}
				onChange={() => handleOnChange("email", "username")}
			/>
			<Buttons
				name={Auth.forgetBtn}
				color={disableOtherField.btn ? "disabled" : "active"}
				htmlType="submit"
				classes="login-form-button mt-5"
				disabled={disableOtherField.btn}
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
