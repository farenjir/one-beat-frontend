import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import CardsOfAuth from "./components/Cards";

export default async function Users({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return <CardsOfAuth dict={dict} />;
}
