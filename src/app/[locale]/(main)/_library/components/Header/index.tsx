import gStyle from "@/assets/styles/global.module.css";
import { CustomerServiceOutlined, HeartOutlined, ShoppingOutlined, StarOutlined } from "@ant-design/icons";

import { PropsWithDice } from "@/types/configs";

export default function MainHeader({ dict }: PropsWithDice) {
	const {
		Main: { Header },
	} = dict;
	// return
	return (
		<div className={gStyle["main__home-container"]}>
			<section className="h-full flex flex-col justify-center align-around  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<sub className="text-subOrange uppercase font-extrabold text-[10px]">{Header.sub}</sub>
				<div className="py-8 text-white text-justify">
					<h1 className="font-thin pb-4 text-[2.5rem] md:text-6xl lg:text-6xl"> {Header.title}</h1>
					<h2 className="font-black text-5xl md:text-7xl lg:text-7xl">{Header.subTitle}</h2>
					<p className="font-[100] pt-5 w-72 text-xs md:text-base md:w-1/2 lg:w-[25rem]">{Header.description}</p>
				</div>
				<div className="text-subOrange flex gap-2 align-middle">
					<HeartOutlined className="text-lg font-black cursor-pointer" />
					<CustomerServiceOutlined className="text-lg font-black cursor-pointer" />
					<StarOutlined className="text-lg font-black cursor-pointer" />
					<span className="py-1 px-3 text-[10px] font-medium  border border-subOrange rounded-lg cursor-pointer hover:bg-subOrange-light hover:border-white hover:text-white">
						{Header.iHave}
						<ShoppingOutlined className="mx-1" />
					</span>
				</div>
			</section>
		</div>
	);
}
