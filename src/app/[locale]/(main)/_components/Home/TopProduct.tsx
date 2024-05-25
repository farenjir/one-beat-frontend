import { Carousel } from "antd";

import { IProduct, LocaleDict } from "@/types";

import { ProductCard } from "@/app/components";

export default function TopProduct({ dict, topProduct = [], locale }: LocaleDict & { topProduct: IProduct[] }) {
	// return
	return (
		<section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:my-10 pt-8 bg-black/20 rounded-2xl">
			<Carousel
				key="top-product"
				id="top-product"
				dotPosition="bottom"
				autoplaySpeed={5000}
				autoplay
				effect="fade"
				className="pb-10 px-2"
			>
				{topProduct.map((product: IProduct) => (
					<ProductCard key={product.id.toString()} product={product} locale={locale} dict={dict} />
				))}
			</Carousel>
		</section>
	);
}
