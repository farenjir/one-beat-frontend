"use client";

import { useRouter } from "next/navigation";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

import { PropsWithDict } from "@/types";
import { createNotification } from "@/utils/notification";
import { useAppContext } from "@/app/lib/context";

import { userRegistered } from "@/app/lib/services/main/client";
import { Inputs, Buttons, Forms } from "@/components";

interface IRegisterForm {
	username: string;
	email: string;
	password: string;
	repeatPassword?: string;
}

const RegisterForm = ({ dict: { Auth } }: PropsWithDict) => {
	// hooks
	const router = useRouter();
	const { callApi, localeConfigs } = useAppContext();
	// handles
	const onFinish = async ({ username, email, password, repeatPassword }: IRegisterForm) => {
		if (password !== repeatPassword) {
			createNotification({ message: Auth.password, type: "warning", description: Auth.passwordDuplicated });
		} else {
			const registerUser = await userRegistered<IRegisterForm>(callApi, { username, email, password });
			if (registerUser?.id) {
				router.push("/");
			}
		}
	};
	// return
	return (
		<Forms name="register-form" onFinish={onFinish}>
			<Inputs
				name="username"
				type="text"
				placeholder={Auth.username}
				prefix={<UserOutlined className="site-form-item-icon" />}
				inputClasses={localeConfigs?.dirRevert}
			/>
			<Inputs
				name="email"
				type="email"
				placeholder={Auth.email}
				prefix={<MailOutlined className="site-form-item-icon" />}
				inputClasses={localeConfigs?.dirRevert}
			/>
			<Inputs
				name="password"
				type="password"
				placeholder={Auth.password}
				prefix={<LockOutlined className="site-form-item-icon" />}
				inputClasses={localeConfigs?.dirRevert}
			/>
			<Inputs
				name="repeatPassword"
				type="password"
				placeholder={Auth.repeatPassword}
				prefix={<LockOutlined className="site-form-item-icon" />}
				inputClasses={localeConfigs?.dirRevert}
			/>
			<Buttons name={Auth.registerAccount} color="success" htmlType="submit" classes="register-form-button mt-5" />
		</Forms>
	);
};

export default RegisterForm;
