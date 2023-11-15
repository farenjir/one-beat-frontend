import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import { TabMenu } from "@/components";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import ForgetPassword from "./components/Forget";

export default async function Auth({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// tabItems
	const tabItems = [
		{
			key: "login",
			label: <span className="font-bold text-appOrange">{dict.Auth.login}</span>,
			content: <LoginForm dict={dict} mode="username" />,
		},
		{
			key: "loginWithEmail",
			label: <span className="font-bold text-appOrange">{dict.Auth.loginEmail}</span>,
			content: <LoginForm dict={dict} mode="email" />,
		},
		{
			key: "register",
			label: <span className="font-bold text-appOrange">{dict.Auth.register}</span>,
			content: <RegisterForm dict={dict} />,
		},
		{
			key: "forget",
			label: <span className="font-bold text-appOrange">{dict.Auth.forget}</span>,
			content: <ForgetPassword dict={dict} />,
		},
	];
	// return
	return (
		<section className="h-full w-full grid place-content-center">
			<div className="bg-gray-50 p-5 rounded-lg">
				<TabMenu items={tabItems} type="card" tabPosition="right" tabClasses="px-5" />
			</div>
		</section>
	);
}
