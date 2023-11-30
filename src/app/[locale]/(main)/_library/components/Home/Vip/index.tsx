import Image from "next/image";

import vipVector from "@/assets/images/vip-vector.png";

import { PropsWithDict } from "@/types";

export default function VipSection({ dict }: PropsWithDict) {
	return (
		<section className="vip-sections mx-auto max-w-7xl mt-20 mb-10 lg:mt-5 px-5 pt-10 lg:p-10">
			<div
				className={`vip-card w-full pb-8 px-10 rounded-3xl bg-appLightGrey text-white border-l border-b border-appOrange text-center`}
			>
				<div className="relative h-28 lg:h-14">
					<Image
						className={`absolute -top-16 right-0 rounded-full`}
						width={120}
						height={150}
						src={vipVector}
						alt="vip-Vector"
						loading="lazy"
					/>
				</div>
				<h3 className="text-2xl lg:text-5xl font-extrabold">اشتراک ویـــژه دریافت کنید !</h3>
				<p className="my-3 text-sm lg:text-lg text-slate-400">
				اشتراک ویژه از آکادمی اِندلس پلاس تهیه کن تا امکان استفاده از  تمام آموزش ها و ابزار های ویرایش فیلم و عکس رو به صورت نامحدود دریافت کنید ...
				</p>
				<button className="px-5 pt-1 text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					<span className="mx-1">خرید اشتراک ویژه</span>
				</button>
			</div>
		</section>
	);
}
