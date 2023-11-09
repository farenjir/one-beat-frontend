"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";

import { PropsWithDice } from "@/types";
import { useAppContext } from "@/context";
import { useAppDispatch } from "@/store/selector";
import { getCurrentUser } from "@/store/auth/action";

import { userAuthentication } from "../../_library/services";
import { Inputs, Buttons, Checkboxes } from "@/components";

interface ILoginForm {
	username?: string;
	email?: string;
	password: string;
}

const LoginForm = ({ dict: { Auth }, mode }: PropsWithDice & { mode: "email" | "username" }) => {
	// hooks
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { callApi } = useAppContext();
	// handles
	const onFinish = useCallback(
		async (values: any) => {
			const formBody = {
				[mode]: values[mode],
				password: values.password,
			};
			const loginUser = await userAuthentication<ILoginForm>(callApi, formBody);
			if (loginUser) {
				dispatch(getCurrentUser({ callApi }));
				router.push("/");
			}
		},
		[mode],
	);
	// return
	return (
		<Form name="login-form" className="login-form" layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
			<Inputs name={mode} type="text" label={Auth[mode]} prefix={<UserOutlined />} />
			<Inputs name="password" type="password" label={Auth.password} prefix={<LockOutlined />} />
			<Checkboxes label={Auth.remember} name="remember" />
			<Buttons name={Auth.loginAccount} color="secondary" htmlType="submit" classes="login-form-button mt-5" />
		</Form>
	);
};

export default LoginForm;
