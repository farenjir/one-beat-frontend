import { Carousel } from "antd";

import { PropsWithDict } from "@/types";

import SingleCard from "./components/SingleCard";

export default function TopProduct({ dict }: PropsWithDict) {
	const {
		Main: { Header },
	} = dict;
	// return
	return (
		<section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<Carousel autoplay dots waitForAnimate dotPosition="bottom" easing="slow">
				<SingleCard />
				<SingleCard />
			</Carousel>
		</section>
	);
}
