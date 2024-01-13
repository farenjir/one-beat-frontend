import { Carousel } from "antd";

import { IProduct, PropsWithDict } from "@/types";

import SingleCard from "./components/SingleCard";

export default function TopProduct({ dict, topProduct = [] }: PropsWithDict & { topProduct: IProduct[] }) {
	const {
		Main: { Header },
	} = dict;
	// return
	return (
		<section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:my-10">
			<Carousel
				key="top-product"
				id="top-product"
				dotPosition="bottom"
				autoplaySpeed={5000}
				autoplay
				effect="fade"
				waitForAnimate
				className="pb-10 px-2"
			>
				{topProduct.map((product) => (
					<>
						<SingleCard key={product.id} product={product} />
						<SingleCard key={product.id} product={product} />
					</>
				))}
			</Carousel>
		</section>
	);
}
