import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import CardsOfAuth from "./components/Cards";

export default async function Users({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<section className="h-full w-full grid place-content-center">
			<div className="bg-gray-50 p-5 rounded-lg">
				<CardsOfAuth dict={dict} />
			</div>
		</section>
	);
}
