import { PropsWithParams } from "@/types";

import gStyle from "@/assets/styles/global.module.css";

import MainNavbar from "./_library/components/Layout/Navbar";
import MainFooter from "./_library/components/Layout/Footer";

export default function MainLayout({ children, params: { locale } }: PropsWithParams) {
	return (
		<>
			<MainNavbar locale={locale} />
			<main className={gStyle["main__home-container"]}>{children}</main>
			<MainFooter locale={locale} />
		</>
	);
}
