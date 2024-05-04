"use client";

import { Badge, Avatar } from "antd";
import { UserOutlined, ShoppingCartOutlined, BellOutlined } from "@ant-design/icons";

import { PropsWithDict } from "@/types";
import { useAppContext } from "@/app/lib/context";

import { useAppDispatch, useAppSelector, userSelector } from "@/store/selector";
import { clearCurrentUser } from "@/store/auth/action";

export default function User({ dict }: PropsWithDict) {
	const user = useAppSelector(userSelector);
	// hooks
	const dispatch = useAppDispatch();
	const { callApi } = useAppContext();
	// handles
	const handleSignOut = async () => {
		dispatch(clearCurrentUser({ callApi }));
	};
	return (
		<>
			{user ? (
				<Badge dot>
					<Avatar
						className="w-[30px] h-[30px] cursor-pointer"
						shape="square"
						icon={<UserOutlined />}
						onClick={handleSignOut}
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="user-avatar"
					/>
				</Badge>
			) : (
				<Badge count={2} size="small">
					<BellOutlined className="text-xl mx-3 text-white cursor-pointer" />
				</Badge>
			)}
			<Badge count={2} size="small">
				<ShoppingCartOutlined className="text-xl mx-3 text-white cursor-pointer" />
			</Badge>
		</>
	);
}
