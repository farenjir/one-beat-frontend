import ProducersSingleCard from "./SingleCard";

export default function ProducerCards({ id }: { id: string }) {
	return (
		<div className="py-10 px-3 lg:px-10">
			<section
				id={id}
				key={id}
				className="producer-sections flex flex-col md:flex-row justify-between align-middle items-center gap-8"
			>
				<ProducersSingleCard id="1" color={"Blue"} />
				<ProducersSingleCard id="2" color={"Orange"} />
				<ProducersSingleCard id="3" color={"Grey"} />
			</section>
		</div>
	);
}
