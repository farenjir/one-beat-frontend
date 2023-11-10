import gStyle from "@/assets/styles/global.module.css";

import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import CardsOfAuth from "./components/Cards";

export default async function Users({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<div className={gStyle["main__home-container"]}>
			<section className="h-full w-full grid place-content-center">
				<div className="bg-gray-50 p-5 rounded-lg">
					<CardsOfAuth dict={dict} />
				</div>
			</section>
		</div>
	);
}
