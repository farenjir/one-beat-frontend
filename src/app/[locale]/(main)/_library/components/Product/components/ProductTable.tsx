"use client";

import { ShoppingOutlined } from "@ant-design/icons";

import { PropsWithDict } from "@/types";

import { Tables } from "@/components";
import ProductFilters from "./Filters";

const ProductTable = ({ dict }: PropsWithDict) => {
	const {
		Main: { Product },
	} = dict;
	// columns
	const columns = [
		{
			key: "name",
			dataIndex: "name",
			title: Product["name"],
		},
		{
			key: "demo",
			dataIndex: "demo",
			title: Product["demo"],
		},
		{
			key: "speed",
			dataIndex: "speed",
			title: Product["speed"],
		},
		{
			key: "genre",
			dataIndex: "genre",
			title: Product["genre"],
		},
		{
			key: "payment",
			dataIndex: "payment",
			title: Product["payment"],
		},
		{
			key: "buy",
			dataIndex: "buy",
			title: Product["buy"],
			render: (_value: any, _record: any, _index: any) => (
				<button className="w-full pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					<ShoppingOutlined />
					<span className="mx-1">خرید</span>
				</button>
			),
		},
	];
	// return
	return (
		<>
			<ProductFilters dict={dict} />
			<Tables
				dataSource={[
					{
						name: "اشکان کاگان",
						demo: "اشکان کاگان",
						speed: "اشکان کاگان",
						genre: "اشکان کاگان",
						payment: "اشکان کاگان",
						buy: "اشکان کاگان",
					},
				]}
				columns={columns}
				className="pb-10"
				themeMode={{ token: "default", algorithm: "darkAlgorithm" }}
			/>
		</>
	);
};

export default ProductTable;
