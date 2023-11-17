import { PropsWithDict } from "@/types";

import ProducersSingleCard from "./components/SingleCard";

export default function Producers({ dict }: PropsWithDict) {
	return (
		<section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white">
			<div className="producer-sections flex justify-between align-middle items-center gap-8">
				<ProducersSingleCard id="1" />
				<ProducersSingleCard id="2" />
				<ProducersSingleCard id="3" />
				<ProducersSingleCard id="4" />
			</div>
		</section>
	);
}
