import { PropsWithDict } from "@/types";

import ProducersSingleCard from "./components/SingleCard";

export default function Producers({ dict }: PropsWithDict) {
	return (
		<section className="producer-sections mx-auto max-w-7xl px-5 pt-8 lg:p-10">
			<div className="producer-title text-white mb-10 text-center">
				<h2 className="text-5xl font-extrabold">برترین آهنگسازان</h2>
				<p className="my-3 text-slate-400">
					تمام دوره ها پشتیبانی ۲۴ ساعته و مادام العمر و همچنین گروه پرسش و پاسخ تلگرامی توسط اساتید مربوطه دارن پس
					با خیال راحت خریــــد کن ...
				</p>
			</div>
			<div className="producer-sections flex flex-col md:flex-row justify-between align-middle items-center gap-8 ">
				<ProducersSingleCard id="1" />
				<ProducersSingleCard id="2" />
				<ProducersSingleCard id="3" />
			</div>
		</section>
	);
}
