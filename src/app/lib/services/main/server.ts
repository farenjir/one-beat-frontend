import { cache } from "react";

import callApi from "@/service";

import { IProduct, IUser } from "@/types";
import { ProducerStatus, ProductStatus } from "@/types/enums";

import "server-only";

// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns

export const getTopProducts = cache(async (): Promise<IProduct[]> => {
	return await callApi<{ data: IProduct[] }>({
		url: "product/all",
		queries: { page: 1, take: 3, status: ProductStatus.TopProduct },
	})
		.then(({ data }) => data)
		.catch((_error) => []);
});

export const getProducers = cache(async (): Promise<IUser[]> => {
	return await callApi<{ data: IUser[] }>({
		url: "user/producers",
		queries: { page: 1, take: 9, producerKyc: ProducerStatus.TopProducer },
	})
		.then(({ data }) => data)
		.catch((_error) => []);
});
