import { cache } from "react";

import callApiServerSide from "@/service/server";
import { TypeApi } from "@/types";

import "server-only";

// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns

// home
export const getTopProducts = cache(async () => {
	return await callApiServerSide<unknown>({ url: "product/top" })
		.then((response) => response)
		.catch((_error) => []);
});
export const getProducts = cache(async () => {
	return await callApiServerSide<unknown>({ url: "product/getAll" })
		.then((response) => response)
		.catch((_error) => []);
});
export const getProducers = cache(async () => {
	return await callApiServerSide<unknown>({ url: "producer/top" })
		.then((response) => response)
		.catch((_error) => []);
});
