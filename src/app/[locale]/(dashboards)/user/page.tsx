import { IParams } from "@/types";
import { getDictionary } from "@/langs";

export default async function UserPage({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// return
	return (
		<>
			<h1>UserPage</h1>
		</>
	);
}
