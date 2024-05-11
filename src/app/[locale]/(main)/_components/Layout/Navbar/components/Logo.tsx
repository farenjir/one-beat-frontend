import Image from "next/image";

import { PropsWithDict } from "@/types";

import AuthLink from "./AuthLink";

export default function LogoSection({ dict }: PropsWithDict) {
	return (
		<>
			<AuthLink dict={dict} />
			<div className="flex flex-shrink-0 items-center">
				<Image
					width={100}
					height={50}
					className="h-7 w-auto text-white"
					src={"/assets/images/header-logo.png"}
					alt="1Beat-logo"
				/>
			</div>
		</>
	);
}
