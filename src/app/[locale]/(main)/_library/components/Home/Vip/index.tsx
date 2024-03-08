import Image from "next/image";

import { PropsWithDict } from "@/types";

export default function VipSection({
	dict: {
		Main: { Vip },
	},
}: PropsWithDict) {
	return (
		<section className="vip-sections mx-auto max-w-7xl mt-20 mb-10 lg:mt-5 px-5 pt-10 lg:p-10">
			<div className={`vip-card w-full pb-8 px-10 rounded-3xl bg-appLightGrey text-white text-center`}>
				<div className="relative h-28 lg:h-14">
					<Image
						className={`absolute -top-16 right-0 rounded-full`}
						width={120}
						height={150}
						src={"/assets/images/vip-vector.png"}
						alt="vip-Vector"
						loading="lazy"
					/>
				</div>
				<h3 className="text-2xl lg:text-5xl font-extrabold">{Vip.title}</h3>
				<p className="my-3 text-sm lg:text-lg text-slate-400">{Vip.description}</p>
				<button className="px-5 pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					{Vip.btnTitle}
				</button>
			</div>
		</section>
	);
}
