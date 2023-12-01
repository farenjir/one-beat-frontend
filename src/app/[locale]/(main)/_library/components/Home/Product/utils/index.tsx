"use client";

import { ShoppingOutlined } from "@ant-design/icons";

export const handleBuyItem = (_value: any, _record: any, _index: any) => (
	<button className="w-full pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
		<span className="mx-1">خرید</span>
		<ShoppingOutlined />
	</button>
);
