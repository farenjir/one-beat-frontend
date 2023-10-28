"use client";

import Link from "next/link";

import { PropsWithDice } from "@/types/configs";
import { useAppSelector, userSelector } from "@/store/selectors";

export default function AuthLink({ dict }: PropsWithDice) {
	const user = useAppSelector(userSelector);
	return (
		<>
			{!user && (
				<div className="hidden sm:block">
					<div className="flex">
						<Link href={"/auth"} className="mx-4 mt-2 text-sm text-white hover:text-orange-500 no-underline">
							{dict.Auth.auth}
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
