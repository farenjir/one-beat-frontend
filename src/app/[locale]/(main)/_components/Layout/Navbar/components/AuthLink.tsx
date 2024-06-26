"use client";

import Link from "next/link";

import { GlobalProps } from "@/types";
import { useAppSelector, authSelector } from "@/store/selector";

export default function AuthLink({ dict }: Pick<GlobalProps, "dict">) {
	const { user, loading } = useAppSelector(authSelector);
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
