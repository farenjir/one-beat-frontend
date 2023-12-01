import { Suspense } from "react";
import { Spin } from "antd";

import { PropsWithDict } from "@/types";

import { handleBuyItem } from "./utils";
import { Tables } from "@/components";
import ProductFilters from "./components/Filters";

const fakeData = Array(8).fill({
	key: `${Math.random()}`,
	name: "اشکان کاگان",
	demo: "اشکان کاگان",
	speed: "127 bpm",
	genre: " هیپ هاپ",
	payment: "350,000",
	buy: "اشکان کاگان",
});

export default function Product({ dict }: PropsWithDict) {
	const {
		Main: { Product },
	} = dict;
	// columns
	const columns = [
		{
			key: "name",
			dataIndex: "name",
			title: Product["name"],
			width: 120,
		},
		{
			key: "demo",
			dataIndex: "demo",
			title: Product["demo"],
			width: 200,
			render: handleBuyItem,
		},
		{
			key: "speed",
			dataIndex: "speed",
			title: Product["speed"],
			width: 100,
		},
		{
			key: "genre",
			dataIndex: "genre",
			title: Product["genre"],
			width: 120,
		},
		{
			key: "payment",
			dataIndex: "payment",
			title: Product["payment"],
			width: 120,
		},
		{
			key: "buy",
			dataIndex: "buy",
			title: Product["buy"],
			width: 100,
			render: handleBuyItem,
		},
	];
	// return
	return (
		<section className="product-section mx-auto max-w-7xl px-2 sm:px-6 md:mb-10 md:mt-5 lg:px-8">
			<Suspense fallback={<Spin spinning className="w-full text-center" />}>
				<ProductFilters dict={dict} />
			</Suspense>
			<Suspense fallback={<Spin spinning className="w-full h-96 grid place-items-center" size="large" />}>
				<Tables
					dataSource={fakeData}
					columns={columns}
					className="pb-10"
					themeMode={{ token: "default", algorithm: "darkAlgorithm" }}
				/>
			</Suspense>
		</section>
	);
}
