"use client";

import Link from "next/link";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import {
	ReadOutlined,
	HomeOutlined,
	MenuOutlined,
	WindowsOutlined,
	UserAddOutlined,
	SaveOutlined,
	CommentOutlined,
} from "@ant-design/icons";

import { PropsWithDice } from "@/types/configs";
import { useAppSelector, userSelector } from "@/store/selector";

export default function NavbarMobileMenu({ dict }: PropsWithDice) {
	const user = useAppSelector(userSelector);
	// MenuProps
	const items: MenuProps["items"] = [
		{
			key: "1",
			icon: <HomeOutlined />,
			label: (
				<Link prefetch={false} href={"/"}>
					{dict.Layout.home}
				</Link>
			),
		},
		{
			key: "2",
			icon: <SaveOutlined />,
			label: (
				<Link prefetch={false} href={"/sample"}>
					{dict.Layout.samplePack}
				</Link>
			),
		},
		{
			key: "3",
			icon: <ReadOutlined />,
			label: (
				<Link prefetch={false} href={"/blog"}>
					{dict.Layout.blog}
				</Link>
			),
		},
		{
			key: "4",
			icon: <WindowsOutlined />,
			label: (
				<Link prefetch={false} href={"/about"}>
					{dict.Layout.about}
				</Link>
			),
		},
		{
			key: "5",
			icon: <CommentOutlined />,
			label: (
				<Link prefetch={false} href={"/contact"}>
					{dict.Layout.contactUs}
				</Link>
			),
		},
		{
			key: "6",
			icon: <UserAddOutlined />,
			label: (
				<Link prefetch={false} href={"/auth"}>
					{dict.Auth.auth}
				</Link>
			),
		},
	];
	// return
	return (
		<Dropdown menu={{ items: items.splice(0, user ? 5 : 6) }}>
			<MenuOutlined className="text-xl text-white mx-2 mb-2" />
		</Dropdown>
	);
}
