import { Carousel } from "antd";

import { IUser, PropsWithDict } from "@/types";

import { ProducerCard } from "@/app/components";

export default function Producers({ dict, producers = [] }: PropsWithDict & { producers: IUser[] }) {
	const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = producers;
	return (
		<section className="producer-sections mx-auto max-w-7xl px-5 pt-8 lg:p-10">
			<div className="producer-title text-white mb-10 text-center">
				<h2 className="text-5xl font-extrabold">برترین آهنگسازان</h2>
				<p className="my-3 text-appGrey">
					تمام دوره ها پشتیبانی ۲۴ ساعته و مادام العمر و همچنین گروه پرسش و پاسخ تلگرامی توسط اساتید مربوطه دارن پس
					با خیال راحت خریــــد کن ...
				</p>
			</div>
			<Carousel key="producers" id="producers" dotPosition="right" autoplaySpeed={5000} autoplay>
				<div className="pt-20 px-2 lg:px-10 lg:py-20">
					<section className="producer-sections flex flex-col md:flex-row gap-24 lg:gap-5">
						<ProducerCard key="producer-1" producer={p1} />
						<ProducerCard key="producer-2" producer={p2} />
						<ProducerCard key="producer-3" producer={p3} />
					</section>
				</div>
				<div className="pt-20 px-2 lg:px-10 lg:py-20">
					<section className="producer-sections flex flex-col md:flex-row gap-24 lg:gap-5">
						<ProducerCard key="producer-1" producer={p4} />
						<ProducerCard key="producer-2" producer={p5} />
						<ProducerCard key="producer-3" producer={p6} />
					</section>
				</div>
				{/* <div className="py-10 px-3 lg:px-10 lg:py-20">
					<section className="producer-sections flex flex-col md:flex-row gap-5">
						<ProducerCard key="producer-4" producer={p7} />
						<ProducerCard key="producer-5" producer={p8} />
						<ProducerCard key="producer-6" producer={p9} />
					</section>
				</div> */}
			</Carousel>
			{/* <div key={"appBlue"} className={`hidden border-appBlue bg-appBlue text-appBlue shadow-appBlue`} /> */}
			{/* <div key={"appGrey"} className={`hidden border-appGrey bg-appGrey text-appGrey shadow-appGrey`} /> */}
			{/* <div key={"appOrange"} className={`hidden border-appOrange bg-appOrange text-appOrange shadow-appOrange`} /> */}
		</section>
	);
}
