import { useRouter } from "next/navigation";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";

import { PropsWithDice } from "@/types";

import { useAppContext } from "@/context";

import { Inputs, Buttons } from "@/components";
import { userRegistered } from "../../_library/services";
import { createNotification } from "@/utils/notification";

interface IRegisterForm {
	username: string;
	email: string;
	password: string;
	repeatPassword?: string;
}

const RegisterForm = ({ dict: { Auth } }: PropsWithDice) => {
	// hooks
	const router = useRouter();
	const { callApi } = useAppContext();
	// handles
	const onFinish = async ({ username, email, password, repeatPassword }: IRegisterForm) => {
		if (password !== repeatPassword) {
			return createNotification({ message: Auth.password, type: "warning", description: Auth.passwordDuplicated });
		}
		const registerUser = await userRegistered<IRegisterForm>(callApi, { username, email, password });
		if (registerUser) {
			router.push("/");
		}
	};
	// return
	return (
		<Form name="register-form" className="register-form" layout="vertical" onFinish={onFinish}>
			<Inputs
				name="username"
				type="text"
				placeholder={Auth.username}
				prefix={<UserOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				name="email"
				type="email"
				placeholder={Auth.email}
				prefix={<MailOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				name="password"
				type="password"
				placeholder={Auth.password}
				prefix={<LockOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				name="repeatPassword"
				type="password"
				placeholder={Auth.repeatPassword}
				prefix={<LockOutlined className="site-form-item-icon" />}
			/>
			<Buttons name={Auth.register} color="success" htmlType="submit" classes="register-form-button mt-5" />
		</Form>
	);
};

export default RegisterForm;
