import gStyle from "@/assets/styles/global.module.css";

import { PropsWithParams } from "@/types/configs";
import { getDictionary } from "@/langs";

import MainNavbar from "./_library/components/Navbar";

export default async function MainLayout({ children, params: { locale } }: PropsWithParams) {
	const dict = await getDictionary(locale);
	return (
		<>
			<MainNavbar dict={dict} />
			<main className={gStyle["bg-metro"]}>{children}</main>
		</>
	);
}
