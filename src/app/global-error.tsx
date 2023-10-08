"use client";

import { useEffect } from "react";
import { IError } from "@/utils/types/configs";

export default function GlobalError({ error, reset }: IError) {
	useEffect(() => {}, [error]);
	return (
		<html>
			<body>
				<div className="mt-52 text-center">
					<h2>Something went wrong!</h2>
					<p className="my-3">{error.message ?? ""}</p>
					<button onClick={() => reset()}>Try again</button>
				</div>
			</body>
		</html>
	);
}
