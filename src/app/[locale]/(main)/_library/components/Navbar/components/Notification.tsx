"use client";

import { Badge, Avatar } from "antd";
import { UserOutlined, ShoppingCartOutlined, BellOutlined } from "@ant-design/icons";

import { PropsWithDice } from "@/types/configs";

export default function Notifications({ dict }: PropsWithDice) {
	return (
		<>
			<Badge dot>
				<Avatar
					className="w-[30px] h-[30px] cursor-pointer"
					shape="square"
					icon={<UserOutlined />}
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="user-avatar"
				/>
			</Badge>
			<Badge count={2} size="small">
				<BellOutlined className="text-xl mx-4 text-white cursor-pointer" />
			</Badge>
			<Badge count={2} size="small">
				<ShoppingCartOutlined className="text-xl mx-3 text-white cursor-pointer" />
			</Badge>
		</>
	);
}