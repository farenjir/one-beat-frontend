import { Suspense } from "react";
import { Spin } from "antd";

import { IParams } from "@/types";
import { getDictionary } from "@/assets/langs";

import { getProducers, getTopProducts } from "@/app/lib/services/main/server";

import MainHeader from "./_components/Home/Header";
import TopProduct from "./_components/Home/TopProduct";
import Producers from "./_components/Home/Producers";
import Product from "./_components/Home/Product";
import VipSection from "./_components/Home/VipSection";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// initialize
	const [topProduct, producers] = [await getTopProducts(), await getProducers()];
	// return
	return (
		<>
			<MainHeader dict={dict} />
			<TopProduct dict={dict} topProduct={topProduct} locale={locale} />
			<Producers dict={dict} producers={producers} />
			<Suspense fallback={<Spin spinning className="w-full h-96 grid place-items-center" size="large" />}>
				<Product dict={dict} />
			</Suspense>
			<VipSection dict={dict} />
		</>
	);
}
