import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { GlobalProps } from "@/types";
import { getDictionary } from "@/assets/langs";

import { Buttons, Checkboxes, Inputs } from "@/components";
import LoginForm from "../_components/Auth/Login";
import Link from "next/link";

export default async function Auth({ params: { locale } }: Pick<GlobalProps, "params">) {
	const { Auth } = await getDictionary(locale);
	// return
	return (
		<LoginForm>
			<Inputs
				name={"username"}
				type="text"
				label={Auth["usernameMail"]}
				required={true}
				addonAfter={<UserOutlined className="site-form-item-icon" />}
			/>
			<Inputs
				name="password"
				type="password"
				label={Auth.password}
				required={true}
				addonAfter={<LockOutlined className="site-form-item-icon" />}
			/>
			<Checkboxes label={Auth.remember} name="remember" />
			<div className="flex items-center justify-between">
				<Buttons name={Auth.loginAccount} color="secondary" htmlType="submit" classes="login-form-button mt-5" />
				<strong className="text-xs">
					<Link href={"/auth/register"} prefetch={false}>
						{Auth.registerAccount}
					</Link>
				</strong>
				<span className="text-xs">
					<Link href={"/auth/forget"} prefetch={false}>
						{Auth.forget}
					</Link>
				</span>
			</div>
		</LoginForm>
	);
}
