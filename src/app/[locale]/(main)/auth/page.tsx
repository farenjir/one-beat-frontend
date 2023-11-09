import gStyle from "@/assets/styles/global.module.css";

import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import { TabMenu } from "@/components";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";

export default async function Users({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// tabItems
	const tabItems = [
		{
			key: "login",
			label: <span className="font-bold">ورود</span>,
			content: <LoginForm dict={dict} />,
		},
		{
			key: "register",
			label: <span className="font-bold">ثبت نام</span>,
			content: <RegisterForm dict={dict} />,
		},
	];
	// return
	return (
		<div className={gStyle["main__home-container"]}>
			<section className="h-full w-full grid place-content-center">
				<div className="bg-gray-50 p-5 rounded-lg">
					<TabMenu items={tabItems} type="card" tabPosition="left" tabClasses="px-3" />
				</div>
			</section>
		</div>
	);
}
