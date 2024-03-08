import { CustomerServiceOutlined, HeartOutlined, ShoppingOutlined, StarOutlined } from "@ant-design/icons";

import { PropsWithDict } from "@/types";

export default function MainHeader({
	dict: {
		Main: { Header },
	},
}: PropsWithDict) {
	// return
	return (
		<section className="h-screen flex flex-col justify-center align-around  mx-auto max-w-7xl px-8">
			<sub className="text-appOrange uppercase font-extrabold text-[10px]">{Header.sub}</sub>
			<div className="py-8 text-white text-justify">
				<h1 className="font-thin pb-4 text-[2.5rem] md:text-6xl lg:text-6xl"> {Header.title}</h1>
				<h2 className="font-black text-5xl md:text-7xl lg:text-7xl">{Header.subTitle}</h2>
				<p className="font-[100] pt-5 w-72 text-xs md:text-base md:w-1/2 lg:w-[25rem]">{Header.description}</p>
			</div>
			<ul className="text-appOrange flex gap-2 align-middle list-none">
				<li>
					<HeartOutlined className="text-xl font-black cursor-pointer" />
				</li>
				<li>
					<CustomerServiceOutlined className="text-xl font-black cursor-pointer" />
				</li>
				<li>
					<StarOutlined className="text-xl font-black cursor-pointer" />
				</li>
				<li className="py-1 px-3 text-xs font-medium  border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white">
					<span className="mx-1">{Header.iHave}</span>
					<ShoppingOutlined />
				</li>
			</ul>
		</section>
	);
}
