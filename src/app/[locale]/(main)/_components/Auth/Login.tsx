"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

import { PropsWithDict } from "@/types";

import { useAppContext } from "@/app/lib/context";
import { useAppDispatch } from "@/store/selector";
import { getCurrentUser } from "@/store/auth/action";

import { userAuthentication } from "@/app/lib/services/main/client";
import { Inputs, Buttons, Checkboxes, Forms } from "@/components";

interface ILoginForm {
	username?: string;
	email?: string;
	password: string;
}

const LoginForm = ({ dict: { Auth }, mode }: PropsWithDict & { mode: "email" | "username" }) => {
	// hooks
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { callApi, localeConfigs } = useAppContext();
	// handles
	const onFinish = useCallback(
		async (values: any) => {
			const formBody = {
				[mode]: values[mode],
				password: values.password,
			};
			const loginUser = await userAuthentication<ILoginForm>(callApi, formBody);
			if (loginUser?.id) {
				dispatch(getCurrentUser({ callApi }));
				router.replace("/");
			}
		},
		[mode],
	);
	// icons switcher
	const icons = {
		email: <MailOutlined className="site-form-item-icon" />,
		username: <UserOutlined className="site-form-item-icon" />,
	};
	// return
	return (
		<Forms name="login-form" onFinish={onFinish} initialValues={{ remember: true }}>
			<Inputs
				// labelOnMode
				name={mode}
				type="text"
				label={Auth[mode]}
				prefix={icons[mode]}
				inputClasses={localeConfigs?.dirRevert}
			/>
			<Inputs
				name="password"
				type="password"
				label={Auth.password}
				prefix={<LockOutlined className="site-form-item-icon" />}
				inputClasses={localeConfigs?.dirRevert}
			/>
			<Checkboxes label={Auth.remember} name="remember" />
			<Buttons name={Auth.loginAccount} color="secondary" htmlType="submit" classes="login-form-button mt-5" />
		</Forms>
	);
};

export default LoginForm;
