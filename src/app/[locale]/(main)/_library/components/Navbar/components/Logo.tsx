import Link from "next/link";
import Image from "next/image";

import { PropsWithDice } from "@/types/configs";
import logo from "@/assets/images/HeaderLogo.svg";

export default function LogoSection({ dict }: PropsWithDice) {
	return (
		<>
			<div className="hidden sm:block">
				<div className="flex">
					<Link href={"/auth"} className="mx-4 mt-2 text-sm text-white hover:text-orange-500 no-underline">
						{dict.Auth.auth}
					</Link>
				</div>
			</div>
			<div className="flex flex-shrink-0 mt-1 items-center">
				<Image width={200} height={100} className="h-8 w-auto text-white" src={logo} alt="1Beat-logo" />
			</div>
		</>
	);
}
