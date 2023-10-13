import gStyle from "@/assets/styles/global.module.css";

import { IParams } from "@/types/configs";
import { getDictionary } from "@/langs";

import MainHeader from "./_library/components/Header";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<div className={gStyle["main__home-container"]}>
			<MainHeader dict={dict} />
		</div>
	);
}
