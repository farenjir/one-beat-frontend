import Image from "next/image";

import { PropsWithDict } from "@/types";

const Description = () => {
	return (
		<div>
			<p className="text-base lg:text-xl">۱۳۵۹ هنرآموز</p>
			<b className="text-appGrey hidden md:block text-xs">دوره جامع فتوشاپ</b>
		</div>
	);
};
export default function Members({
	dict: {
		Main: { Members },
	},
}: PropsWithDict) {
	return (
		<section className="member-sections mx-auto max-w-7xl px-5 pt-10 lg:p-10">
			<div className={`w-full rounded-3xl text-white text-center`}>
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
				<div className={`flex justify-around align-middle py-4 lg:py-7 rounded-3xl bg-appLightGrey text-white`}>
					<Description key={"Description-1"} />
					<Description key={"Description-2"} />
					<Description key={"Description-3"} />
					<Description key={"Description-4"} />
					<Description key={"Description-5"} />
				</div>
			</div>
		</section>
	);
}
