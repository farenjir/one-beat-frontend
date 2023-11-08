"use client";

import { useState } from "react";
import { Card } from "antd";

import LoginForm from "./Login";

const tabListNoTitle = [
	{
		key: "login",
		label: "login",
	},
	{
		key: "register",
		label: "register",
	},
	{
		key: "forget",
		label: "forget",
	},
];

const AuthCard = () => {
	const [activeTabKey2, setActiveTabKey2] = useState<string>("login");
	// handles
	const onTab2Change = (key: string) => {
		setActiveTabKey2(key);
	};
	// tabs
	const contentListNoTitle: Record<string, React.ReactNode> = {
		login: <LoginForm />,
		register: <LoginForm />,
		forget: <LoginForm />,
	};
	// return
	return (
		<Card
			size="default"
			dir="rtl"
			// style={{ width: "100%" }}
			activeTabKey={activeTabKey2}
			tabList={tabListNoTitle}
			// tabBarExtraContent={<a href="#">More</a>}
			onTabChange={onTab2Change}
			// tabProps={{
			// 	size: "middle",
			// }}
		>
			{contentListNoTitle[activeTabKey2]}
		</Card>
	);
};

export default AuthCard;
