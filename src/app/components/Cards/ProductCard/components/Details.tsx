"use client";

import { useAppContext } from "@/app/lib/context";
import { basesSelector, useAppSelector } from "@/store/selector";
import { IProduct } from "@/types";
import { CaretLeftOutlined } from "@ant-design/icons";

const DetailsProductItems = ({
	product: { genreIds = [], tempoIds = [], groupIds = [], moodIds = [] },
}: {
	product: Partial<IProduct>;
}) => {
	// hooks
	const {
		dict,
		localeConfigs: { lang },
	} = useAppContext();
	const bases = useAppSelector(basesSelector);
	// handles
	const baseGenerator = (baseName: string, ids: Array<number>) => {
		return ids.map((id) => bases?.[baseName]?.[id]?.name || "-").join(ids?.length > 1 ? " , " : "");
	};
	// details
	const details = [
		{
			key: "genreIds",
			name: ": سبک",
			value: baseGenerator("genderChildren", genreIds),
		},
		{
			key: "tempoIds",
			name: ": مود",
			value: baseGenerator("tempoChildren", tempoIds),
		},
		{
			key: "groupIds",
			name: ": سازبندی",
			value: baseGenerator("moodChildren", groupIds),
		},
		{
			key: "moodIds",
			name: ": تمپو",
			value: baseGenerator("groupChildren", moodIds),
		},
	];
	// return JSX
	return (
		<ul className="list-outside text-xl">
			{details.map(({ key, name, value = "" }) => (
				<li className="flex justify-end gap-2" key={key}>
					<strong>{value}</strong>
					<small className="text-appOrange">{name}</small>
					<CaretLeftOutlined className="pb-1 text-xs text-appOrange" />
				</li>
			))}
		</ul>
	);
};

export default DetailsProductItems;
