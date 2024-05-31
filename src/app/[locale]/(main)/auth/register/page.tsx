import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { GlobalProps } from "@/types";
import { getDictionary } from "@/assets/langs";

import { Buttons, Inputs } from "@/components";
import RegisterForm from "../../_components/Auth/Register";

export default async function Register({ params: { locale } }: Pick<GlobalProps, "params">) {
	const { Auth } = await getDictionary(locale);
	// return
	return (
		<RegisterForm dict={{ Auth }}>
			<Inputs
				name="username"
				type="text"
				addonAfter={<UserOutlined className="site-form-item-icon" />}
				placeholder={Auth.username}
				required={true}
			/>
			<Inputs
				name="email"
				type="email"
				addonAfter={<MailOutlined className="site-form-item-icon" />}
				placeholder={Auth.email}
				required={true}
			/>
			<Inputs
				name="password"
				type="password"
				addonAfter={<LockOutlined className="site-form-item-icon" />}
				placeholder={Auth.password}
				required={true}
			/>
			<Inputs
				name="repeatPassword"
				type="password"
				addonAfter={<LockOutlined className="site-form-item-icon" />}
				placeholder={Auth.repeatPassword}
				required={true}
			/>
			<Buttons name={Auth.registerAccount} color="success" htmlType="submit" classes="register-form-button mt-5" />
		</RegisterForm>
	);
}
