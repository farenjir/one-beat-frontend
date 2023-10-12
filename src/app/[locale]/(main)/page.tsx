import gStyle from "@/assets/styles/global.module.css";

import { IParams } from "@/types/configs";
import { getDictionary } from "@/langs";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	return (
		<div className={gStyle["main__home-container"]}>
			{/* <h1>{dict.Schemas.required}</h1> */}
		</div>
	);
}
