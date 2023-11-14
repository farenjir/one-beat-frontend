"use client";

import { PropsWithDice } from "@/types";

import { TabMenu } from "@/components";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import ForgetPassword from "./Forget";

const CardsOfAuth = ({ dict }: PropsWithDice) => {
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
				<TabMenu items={tabItems} type="card" tabPosition="right" tabClasses="px-5" />{" "}
			</div>
		</section>
	);
};

export default CardsOfAuth;
