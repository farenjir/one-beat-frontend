import Image from "next/image";
import { Carousel } from "antd";

import { PropsWithDict } from "@/types";

import img from "./card-top.jpg";

export default function TopProduct({ dict }: PropsWithDict) {
	const {
		Main: { Header },
	} = dict;
	// return
	return (
		<section className="pb-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<Carousel autoplay dots waitForAnimate dotPosition="bottom" easing="slow">
				<div className="h-[950px] leading-[950px] lg:h-[450px] lg:leading-[450px] text-white">
					<section className="flex flex-col md:flex-row">
						<div className="grow-0">
							<Image className="w-full rounded-xl" src={img} alt="" loading="lazy" />
						</div>
						<div className="grow-0">
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="mb-2 text-2xl font-bold tracking-tight ">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="mb-3 font-normal">
									Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
									chronological order.
								</p>
							</div>
						</div>
						<div className="grow-0">
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="mb-2 text-2xl font-bold tracking-tight  ">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="mb-3 font-normal">
									Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
									chronological order.
								</p>
							</div>
						</div>
					</section>
				</div>
				<div className="h-[950px] leading-[950px] lg:h-[450px] lg:leading-[450px] text-white">
					<section className="flex flex-col md:flex-row">
						<div className="grow-0">
							<Image className="w-full rounded-xl" src={img} alt="" loading="lazy" />
						</div>
						<div className="grow-0">
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="mb-2 text-2xl font-bold tracking-tight ">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="mb-3 font-normal">
									Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
									chronological order.
								</p>
							</div>
						</div>
						<div className="grow-0">
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="mb-2 text-2xl font-bold tracking-tight  ">
									Noteworthy technology acquisitions 2021
								</h5>
								<p className="mb-3 font-normal">
									Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
									chronological order.
								</p>
							</div>
						</div>
					</section>
				</div>
			</Carousel>
		</section>
	);
}
