import { GlobalProps } from "@/types";
import { basesSelector, useAppSelector } from "@/store/selector";

import { DropdownSelectable } from "@/components";

const commonStyles = {
	classes: "col-span-2 lg:col-span-1",
	titleClasses: "px-3 text-lg border-b border-appGrey text-appGrey rounded-lg",
};

const ProductFilters = ({
	dict: {
		Main: { Product },
	},
}: Pick<GlobalProps, "dict">) => {
	// hooks
	const bases = useAppSelector(basesSelector);
	// filters
	const filters = ["genre", "tempo", "mood", "group"];
	// handles
	const handleOnClickFilter = ({ key: id, ...other }: { key: string }, mode: string) => {};
	// return
	return (
		<div className="filter-section mb-5 grid gap-3 items-center align-middle grid-cols-4 lg:grid-cols-5 lg:w-2/3">
			<small className="text-lg text-appOrange px-4 pt-2 mt-5 lg:mt-0 col-span-4 lg:col-span-1">
				{Product.filterBy}
			</small>
			{filters.map((item) => (
				<DropdownSelectable
					key={item}
					title={Product[item]}
					items={bases[item]?.children || []}
					onClick={(e) => handleOnClickFilter(e, item)}
					{...commonStyles}
				/>
			))}
		</div>
	);
};

export default ProductFilters;
