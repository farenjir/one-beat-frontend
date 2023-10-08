import { IParams } from "@/utils/types/configs";
import { getDictionary } from "@/utils/langs";

export default async function MainPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	return (
		<center>
			<h1>{dict.schemas.required}</h1>
		</center>
	);
}
