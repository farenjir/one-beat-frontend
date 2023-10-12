import Link from "next/link";

import { PropsWithDice } from "@/types/configs";

import NavbarMobileMenu from "./components/MobileMenu";
import Notifications from "./components/Notification";
import LogoSection from "./components/Logo";

export default function MainNavbar({ dict }: PropsWithDice) {
	return (
		<nav className="bg-navGray">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					{/* NavbarMobileMenu */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<NavbarMobileMenu dict={dict} />
					</div>
					{/* MenuSection */}
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<Notifications dict={dict} />
						<div className="hidden sm:mx-5 sm:block">
							<div className="flex space-x-4">
								<Link
									href={"/"}
									className="px-3 py-2 text-sm font-medium text-white hover:text-orange-400 no-underline"
								>
									{dict.Layout.home}
								</Link>
								<Link
									href={"/sample"}
									className="px-3 py-2 text-sm font-medium text-white hover:text-orange-400 no-underline"
								>
									{dict.Layout.samplePack}
								</Link>
								<Link
									href={"/blog"}
									className="px-3 py-2 text-sm font-medium text-white hover:text-orange-400 no-underline"
								>
									{dict.Layout.blog}
								</Link>
								<Link
									href={"/about"}
									className="px-3 py-2 text-sm font-medium text-white hover:text-orange-400 no-underline"
								>
									{dict.Layout.about}
								</Link>
								<Link
									href={"/contact"}
									className="px-3 py-2 text-sm font-medium text-white hover:text-orange-400 no-underline"
								>
									{dict.Layout.contactUs}
								</Link>
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
