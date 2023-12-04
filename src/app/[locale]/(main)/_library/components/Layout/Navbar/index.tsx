import Link from "next/link";

import { PropsWithLocale } from "@/types";
import { getDictionary } from "@/langs";

import NavbarMobileMenu from "./components/MobileMenu";
import User from "./components/User";
import LogoSection from "./components/Logo";

export default async function MainNavbar({ locale }: PropsWithLocale) {
	const dict = await getDictionary(locale);
	const links = [
		{ href: "/", title: dict.Layout.home, prefetch: true },
		{ href: "/sample", title: dict.Layout.samplePack, prefetch: true },
		{ href: "/blog", title: dict.Layout.blog, prefetch: true },
		{ href: "/about", title: dict.Layout.about, prefetch: false },
		{ href: "/contact", title: dict.Layout.contactUs, prefetch: false },
	];
	// return
	return (
		<nav className="bg-appBlur w-full absolute top-0 left-0">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					{/* NavbarMobileMenu */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<NavbarMobileMenu dict={dict} />
					</div>
					{/* MenuSection */}
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<User dict={dict} />
						<div className="hidden sm:mx-5 sm:block">
							<div className="flex space-x-4">
								{links.map(({ title, ...linkOptions }) => (
									<Link
										key={title}
										{...linkOptions}
										className="px-3 py-2 text-white text-sm hover:text-appOrange"
									>
										{title}
									</Link>
								))}
							</div>
						</div>
					</div>
					{/* LogoSection */}
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
						<LogoSection dict={dict} />
					</div>
				</div>
			</div>
		</nav>
	);
}
