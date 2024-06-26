"use client";

import { useEffect } from "react";

export interface IError {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function Error({ error, reset }: IError) {
	useEffect(() => {}, [error]);
	return (
		<div className="mt-52 text-center">
			<h2>Something went wrong!</h2>
			<p className="my-3">{error.message ?? ""}</p>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
