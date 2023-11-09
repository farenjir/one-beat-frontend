"use client";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form } from "antd";

import { PropsWithDice } from "@/types";

import { Inputs, Buttons } from "@/components";

const RegisterForm = ({ dict: { Auth } }: PropsWithDice) => {
	// handles
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};
	// return
	return (
		<Form name="normal_login" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish}>
			<Inputs
				// label="Username"
				name="username"
				type="text"
				placeholder="Username"
				prefix={<UserOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				// label="Email"
				name="email"
				type="email"
				placeholder="Email"
				prefix={<MailOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				// label="Password"
				name="password"
				type="password"
				placeholder="Password"
				prefix={<LockOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				// label="Password"
				name="repeatPassword"
				type="password"
				placeholder="repeatPassword"
				prefix={<LockOutlined className="site-form-item-icon" />}
			/>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
			</Form.Item>
			<Buttons name="Register" htmlType="submit" classes="register-form-button" />
		</Form>
	);
};

export default RegisterForm;
