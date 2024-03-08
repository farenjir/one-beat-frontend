import { IParams } from "@/types";
import { getDictionary } from "@/assets/langs";

export default async function AdminPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<>
			<h1>AdminPage</h1>
		</>
	);
}
