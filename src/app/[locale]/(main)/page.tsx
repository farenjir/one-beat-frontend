import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import MainHeader from "./_library/components/Header";
import TopProduct from "./_library/components/TopProduct";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<>
			<MainHeader dict={dict} />
			<TopProduct dict={dict} />
		</>
	);
}
