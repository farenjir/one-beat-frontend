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

const NavbarMobileMenu = ({ dict }: PropsWithDice) => {
	const items: MenuProps["items"] = [
		{
			key: "1",
			icon: <HomeOutlined />,
			label: <Link href={"/"}>{dict.Layout.home}</Link>,
		},
		{
			key: "2",
			icon: <SaveOutlined />,
			label: <Link href={"/sample"}>{dict.Layout.samplePack}</Link>,
		},
		{
			key: "3",
			icon: <ReadOutlined />,
			label: <Link href={"/blog"}>{dict.Layout.blog}</Link>,
		},
		{
			key: "4",
			icon: <WindowsOutlined />,
			label: <Link href={"/about"}>{dict.Layout.about}</Link>,
		},
		{
			key: "5",
			icon: <CommentOutlined />,
			label: <Link href={"/contact"}>{dict.Layout.contactUs}</Link>,
		},
		{
			key: "6",
			icon: <UserAddOutlined />,
			label: <Link href={"/auth"}>{dict.Auth.auth}</Link>,
		},
	];
	// return
	return (
		<Dropdown menu={{ items }}>
			<MenuOutlined className="text-xl" />
		</Dropdown>
	);
};

export default NavbarMobileMenu;
