import { Suspense } from "react";

import { PropsWithDict } from "@/types";

import { handleBuyItem } from "./utils";

import { Tables } from "@/components";
import ProductFilters from "./Filters";
import { Spin } from "antd";

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
			render: handleBuyItem,
		},
	];
	// return
	return (
		<Suspense fallback={<Spin spinning className="w-full text-center" />}>
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
		</Suspense>
	);
};

export default ProductTable;
