"use client";

import gStyle from "@/assets/styles/global.module.css";

import { IParams } from "@/types";
import { getDictionary } from "@/langs";

import AuthCard from "./components/AuthCard";

export default async function Users({ params: { locale } }: IParams) {
	const dict = await getDictionary(locale);
	// handles
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};
	// return
	return (
		<div className={gStyle["main__home-container"]}>
			<section className="h-full grid place-content-center">
				<AuthCard />
			</section>
		</div>
	);
}
