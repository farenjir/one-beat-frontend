import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import { getProducers, getProducts, getTopProducts } from "./_library/services/server";

import MainHeader from "./_library/components/Home/Header";
import TopProduct from "./_library/components/Home/TopProduct";
import Producers from "./_library/components/Home/Producers";
import Product from "./_library/components/Home/Product";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	const [topProduct, producers, products] = [await getTopProducts(), await getProducts(), await getProducers()];
	// return
	return (
		<>
			<MainHeader dict={dict} />
			<TopProduct dict={dict} />
			<Producers dict={dict} />
			<Product dict={dict} />
		</>
	);
}
