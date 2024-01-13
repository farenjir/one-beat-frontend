"use client";

import { Suspense } from "react";
import { Spin } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

import { PropsWithDict } from "@/types";
import { basesSelector, useAppSelector } from "@/store/selector";

import { Tables } from "@/components";
import ProductFilters from "./components/Filters";

const fakeData = Array(8)
	.fill(null)
	.map((_, idx) => ({
		key: `${idx + 1}`,
		name: "اشکان کاگان",
		demo: "اشکان کاگان",
		speed: "127 bpm",
		genre: 113,
		payment: "350,000",
		buy: "اشکان کاگان",
	}));

export default function Product({ dict }: PropsWithDict) {
	const {
		Main: { Product },
	} = dict;
	// hooks
	const { genreChildren } = useAppSelector(basesSelector);
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
			render: (_value: any, _record: any, _index: any) => (
				<button className="w-full pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					<span className="mx-1">خرید</span>
					<ShoppingOutlined />
				</button>
			),
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
			render: (value: number, _record: any, _index: any) => {
				const { label } = genreChildren?.[value] || { label: "-" };
				return <span className="mx-1">{label}</span>;
			},
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
			render: (_value: any, _record: any, _index: any) => (
				<button className="w-full pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					<span className="mx-1">خرید</span>
					<ShoppingOutlined />
				</button>
			),
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
