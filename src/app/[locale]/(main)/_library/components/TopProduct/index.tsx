import { Carousel } from "antd";

import { PropsWithDice } from "@/types/configs";

export default function TopProduct({ dict }: PropsWithDice) {
	const {
		Main: { Header },
	} = dict;
	// return
	return (
		<section className="pb-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<Carousel autoplay dots waitForAnimate dotPosition="bottom" easing="slow">
				<div>
					<h3 className="h-[500px] leading-[500px] text-white bg-slate-800 text-center">1</h3>
				</div>
				<div>
					<h3 className="h-[500px] leading-[500px] text-white bg-slate-800 text-center">2</h3>
				</div>
				<div>
					<h3 className="h-[500px] leading-[500px] text-white bg-slate-800 text-center">3</h3>
				</div>
				<div>
					<h3 className="h-[500px] leading-[500px] text-white bg-slate-800 text-center">4</h3>
				</div>
			</Carousel>
		</section>
	);
}
