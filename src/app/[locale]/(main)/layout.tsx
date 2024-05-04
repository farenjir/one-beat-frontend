import { PropsWithParams } from "@/types";

import MainNavbar from "./_components/Layout/Navbar";
import MainFooter from "./_components/Layout/Footer";

export default function MainLayout({ children, params: { locale } }: PropsWithParams) {
	return (
		<>
			<MainNavbar locale={locale} />
			<main className="bg-black">{children}</main>
			<MainFooter locale={locale} />
		</>
	);
}
