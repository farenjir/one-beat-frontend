import { IParams } from "@/types";
import { getDictionary } from "@/langs";

export default async function AdminPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<>
			<h1>AdminPage</h1>
		</>
	);
}
