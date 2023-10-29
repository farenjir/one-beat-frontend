import Image from "next/image";

import { PropsWithDice } from "@/types";

import logo from "@/assets/images/HeaderLogo-dark.svg";
import AuthLink from "./AuthLink";

export default function LogoSection({ dict }: PropsWithDice) {
	return (
		<>
			<AuthLink dict={dict} />
			<div className="flex flex-shrink-0 items-center">
				<Image width={200} height={100} className="h-8 w-auto text-white" src={logo} alt="1Beat-logo" />
			</div>
		</>
	);
}
