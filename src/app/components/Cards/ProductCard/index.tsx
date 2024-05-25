import Image from "next/image";
import { twJoin } from "tailwind-merge";
import { ShoppingOutlined } from "@ant-design/icons";

import { ILocale, IProduct } from "@/types";
import { getLocaleConfigs } from "@/utils/global";

import DetailsProductItems from "./components/Details";

export default function ProductCard({ product = {}, locale }: { product: Partial<IProduct>; locale?: ILocale }) {
	const { dirRevert, dir, lang } = getLocaleConfigs(locale);
	return (
		<div className={twJoin("single-card-layout", dirRevert)}>
			<section className="flex flex-col-reverse gap-3 md:flex-row-reverse">
				<div className="md:w-2/3 text-white">
					<div className="flex flex-col items-end justify-between h-full">
						<div className="beat-descriptions flex flex-col items-end">
							<h5 className="mb-2 text-4xl font-extrabold">{product[`${lang}Name`]}</h5>
							<small className="mb-3 mx-2">
								<strong className="mx-1 text-lg">{product.producer?.username || ""}</strong> آهنگساز
							</small>
						</div>
						<DetailsProductItems product={product} />
						<button className="text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white w-full mt-3 md:mt-1 md:w-1/2 pt-1">
							<ShoppingOutlined />
							<span className="mx-1">خرید</span>
						</button>
					</div>
				</div>
				<div className={twJoin("w-3/4 text-white hidden md:block", dir)}>
					<p className="font-normal text-justify text-appGrey hover:text-white">{product[`${lang}Description`]}</p>
				</div>
				<Image
					className="rounded-xl"
					// sizes="300px"
					// fill
					// style={{
					// 	objectFit: "contain",
					// }}
					height={200}
					width={500}
					src={"/assets/images/test.jpg"}
					alt={product.enName || "cover-img"}
					loading="lazy"
				/>
			</section>
		</div>
	);
}
