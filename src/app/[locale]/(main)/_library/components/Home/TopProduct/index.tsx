import { Carousel } from "antd";

import { PropsWithDict } from "@/types";

import SingleCard from "./components/SingleCard";

export default function TopProduct({ dict }: PropsWithDict) {
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
				<SingleCard id="1" />
				<SingleCard id="2" />
				<SingleCard id="3" />
			</Carousel>
		</section>
	);
}
