"use client";

import { PropsWithDice } from "@/types/configs";

import { Badge, Avatar } from "antd";
import { UserOutlined, ShoppingCartOutlined, BellOutlined } from "@ant-design/icons";

const Notifications = ({ dict }: PropsWithDice) => (
	<div dir="rtl">
		<Badge dot>
			<Avatar
				shape="square"
				icon={<UserOutlined />}
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
				alt="user-avatar"
			/>
		</Badge>
		<Badge count={2} size="small">
			<BellOutlined className="text-xl mx-4" />
		</Badge>
		<Badge count={2} size="small">
			<ShoppingCartOutlined className="text-xl mx-3" />
		</Badge>
	</div>
);

export default Notifications;
