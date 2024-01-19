import Image from "next/image";

import members from "@/assets/images/members.png";

import { PropsWithDict } from "@/types";

const Description = () => {
	return (
		<div>
			<p className="text-base lg:text-xl">۱۳۵۹ هنرآموز</p>
			<b className="text-slate-400 hidden md:block text-xs">دوره جامع فتوشاپ</b>
		</div>
	);
};
export default function Members({ dict }: PropsWithDict) {
	const {
		Main: { Members },
	} = dict;
	return (
		<section className="member-sections mx-auto max-w-7xl mb-5 lg:mb-10 px-5 pt-10 lg:p-10">
			<div className={`w-full rounded-3xl text-white text-center border-t border-appOrange`}>
				<div className="relative h-10 hidden lg:block">
					<Image
						className={`absolute top-12 left-0 rounded-full`}
						width={150}
						height={150}
						src={members}
						alt="members"
						loading="lazy"
					/>
				</div>
				<h3 className="text-2xl lg:text-5xl font-extrabold">{Members.title}</h3>
				<p className="my-3 text-sm lg:text-lg text-slate-400">{Members.description}</p>
				<div className={`flex justify-around align-middle py-4 lg:py-7 rounded-3xl bg-appLightGrey text-white`}>
					<Description />
					<Description />
					<Description />
					<Description />
					<Description />
				</div>
			</div>
		</section>
	);
}
