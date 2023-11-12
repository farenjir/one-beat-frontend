import { PropsWithParams } from "@/types";

import gStyle from "@/assets/styles/global.module.css";

import MainNavbar from "./_library/components/Navbar";

export default async function MainLayout({ children, params: { locale } }: PropsWithParams) {
	return (
		<>
			<MainNavbar locale={locale} />
			<main className="bg-black">
				<div className={gStyle["main__home-container"]}>{children}</div>
			</main>
		</>
	);
}
