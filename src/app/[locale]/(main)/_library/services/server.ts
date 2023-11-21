import { cache } from "react";

import callApi from "@/service";
import { TypeApi } from "@/types";

import "server-only";

// export const preload = (id: string) => {
// 	void getItem(id);
// };

// export const getItem = cache(async (id: string) => {
// 	// ...
// });

// home
export const getTopProducts = cache(async () => {
	return await callApi<unknown>({ url: "product/top" })
		.then((response) => response)
		.catch((_error) => null);
});
export const getProducts = cache(async () => {
	return await callApi<unknown>({ url: "product/getAll" })
		.then((response) => response)
		.catch((_error) => null);
});
export const getProducers = cache(async () => {
	return await callApi<unknown>({ url: "producer/top" })
		.then((response) => response)
		.catch((_error) => null);
});
