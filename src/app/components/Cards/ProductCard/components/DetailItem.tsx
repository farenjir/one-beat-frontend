"use client";

import { useAppContext } from "@/app/lib/context";
import { basesSelector, useAppSelector } from "@/store/selector";

const DetailItem = ({ ids, baseName }: { ids: Array<number>; baseName: string }) => {
	// hooks
	const {
		dict,
		localeConfigs: { lang },
	} = useAppContext();
	const bases = useAppSelector(basesSelector);
	const baseGenerator = (baseName: string, ids: Array<number>) => {
		return ids.map((id) => bases?.[baseName]?.[id]?.name || "-").join(ids?.length > 1 ? " , " : "");
	};
	const value = baseGenerator(baseName, ids);
	return <strong>{value}</strong>;
};
export default DetailItem;
