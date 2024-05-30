import Image from "next/image";

import { GlobalProps } from "@/types";

export default function VipSection({
	dict: {
		Main: { Vip, Members },
	},
}: Pick<GlobalProps, "dict">) {
	return (
		<section className="vip-sections mx-auto max-w-7xl mt-20 pb-20 lg:mt-5 px-5 pt-10 lg:p-10 lg:pb-20">
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
				<p className="my-3 text-sm lg:text-lg text-appGrey">{Vip.description}</p>
				<button className="px-5 pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					{Vip.btnTitle}
				</button>
			</div>
			<div className={`w-full rounded-3xl text-white text-center mt-20`}>
				<div className="relative h-10 hidden lg:block">
					<Image
						className={`absolute top-12 left-0 rounded-full`}
						width={150}
						height={150}
						src={"/assets/images/members.png"}
						alt="members"
						loading="lazy"
					/>
				</div>
				<h3 className="text-2xl lg:text-5xl font-extrabold">{Members.title}</h3>
				<p className="my-3 text-sm lg:text-lg text-appGrey">{Members.description}</p>
				<div
					className={`flex justify-around align-middle py-4 lg:px-20 lg:py-7 rounded-3xl bg-appLightGrey text-white`}
				>
					<div>
						<p className="text-base lg:text-xl">۱۳۵۹ هنرآموز</p>
						<b className="text-appGrey hidden md:block text-xs">دوره جامع فتوشاپ</b>
					</div>
					<div>
						<p className="text-base lg:text-xl">۱۳۵۹ هنرآموز</p>
						<b className="text-appGrey hidden md:block text-xs">دوره جامع فتوشاپ</b>
					</div>
					<div>
						<p className="text-base lg:text-xl">۱۳۵۹ هنرآموز</p>
						<b className="text-appGrey hidden md:block text-xs">دوره جامع فتوشاپ</b>
					</div>
					<div>
						<p className="text-base lg:text-xl">۱۳۵۹ هنرآموز</p>
						<b className="text-appGrey hidden md:block text-xs">دوره جامع فتوشاپ</b>
					</div>
				</div>
			</div>
		</section>
	);
}
