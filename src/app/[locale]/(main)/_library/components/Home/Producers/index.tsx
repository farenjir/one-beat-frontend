import { Carousel } from "antd";

import { PropsWithDict } from "@/types";

import ProducerCards from "./components/CardSection";

export default function Producers({ dict }: PropsWithDict) {
	const colors = ["appBlue", "appGrey", "appOrange"]; // add color to tailwind css file
	return (
		<section className="producer-sections mx-auto max-w-7xl px-5 pt-8 lg:p-10">
			<div className="producer-title text-white mb-10 text-center">
				<h2 className="text-5xl font-extrabold">برترین آهنگسازان</h2>
				<p className="my-3 text-slate-400">
					تمام دوره ها پشتیبانی ۲۴ ساعته و مادام العمر و همچنین گروه پرسش و پاسخ تلگرامی توسط اساتید مربوطه دارن پس
					با خیال راحت خریــــد کن ...
				</p>
			</div>
			<Carousel key="producers" id="producers" dotPosition="right" autoplaySpeed={5000} autoplay waitForAnimate>
				<ProducerCards id="1" />
				<ProducerCards id="2" />
				<ProducerCards id="3" />
			</Carousel>
			{colors.map((color) => (
				<div key={color} className={`hidden border-${color} bg-${color} text-${color} shadow-${color}`} />
			))}
		</section>
	);
}
