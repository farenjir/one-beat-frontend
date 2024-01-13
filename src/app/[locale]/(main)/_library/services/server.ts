import { cache } from "react";

import callApiServerSide from "@/service/server";

import { IProduct, IUser } from "@/types";
import { ProducerStatus, ProductStatus, Roles } from "@/types/configs/enums";

import "server-only";

// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns

export const getTopProducts = cache(async (): Promise<IProduct[]> => {
	return await callApiServerSide<{ data: IProduct[] }>({
		url: "product/all",
		queries: { page: 1, take: 3, status: ProductStatus.TopProduct },
	})
		.then(({ data }) => data)
		.catch((_error) => []);
});

export const getProducers = cache(async (): Promise<IUser[]> => {
	return await callApiServerSide<{ data: IUser[] }>({
		url: "user/all",
		queries: { page: 1, take: 9, producerKyc: ProducerStatus.TopProducer, userKyc: true, role: Roles.Producer },
	})
		.then(({ data }) => data)
		.catch((_error) => []);
});
