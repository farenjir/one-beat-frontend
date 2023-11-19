import { Suspense } from "react";
import { Spin } from "antd";

import { PropsWithDict } from "@/types";

import ProductFilters from "./components/Filters";

export default function Product({ dict }: PropsWithDict) {
	// return
	return (
		<section className="product-section mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:my-10">
			<Suspense fallback={<Spin spinning className="w-full text-center" />}>
				<ProductFilters dict={dict} />
			</Suspense>
		</section>
	);
}
