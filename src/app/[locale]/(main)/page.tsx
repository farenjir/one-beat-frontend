import { Suspense } from "react";
import { Spin } from "antd";

import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import { getProducers, getTopProducts } from "./_library/services/server";

import MainHeader from "./_library/components/Home/Header";
import TopProduct from "./_library/components/Home/TopProduct";
import Producers from "./_library/components/Home/Producers";
import Product from "./_library/components/Home/Product";
import VipSection from "./_library/components/Home/Vip";
import Members from "./_library/components/Home/Members";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// initialize
	const [topProduct, producers] = [await getTopProducts(), await getProducers()];
	// return
	return (
		<>
			<MainHeader dict={dict} />
			<TopProduct dict={dict} topProduct={topProduct} />
			<Suspense fallback={<Spin spinning className="w-full h-96 grid place-items-center" size="large" />}>
				<Producers dict={dict} producers={producers} />
			</Suspense>
			<Suspense fallback={<Spin spinning className="w-full h-96 grid place-items-center" size="large" />}>
				<Product dict={dict} />
			</Suspense>
			<Suspense fallback={<Spin spinning className="w-full h-96 grid place-items-center" size="large" />}>
				<VipSection dict={dict} />
				<Members dict={dict} />
			</Suspense>
		</>
	);
}
