import Image from "next/image";
import { SafetyOutlined, UserOutlined } from "@ant-design/icons";

import img from "../../card-top.jpg";

const Descriptions = () => {
	const TitleItem = () => (
		<li className="flex">
			<p className="mx-2 text-slate-400 text-sm"> سبک : </p>
			<p>POOLAD</p>
		</li>
	);
	// return
	return (
		<>
			<ul className="grid gap-3">
				<TitleItem />
				<TitleItem />
				<TitleItem />
			</ul>
			<button className="text-appOrange cursor-pointer pt-5">
				<span>ورود به صفحه</span>
				<UserOutlined className="mx-2 p-1 rounded-full border border-appOrange" />
			</button>
		</>
	);
};

export default function ProducersSingleCard({ id }: { id: string }) {
	return (
		<div
			className="producer-card w-full rounded-3xl rounded-tr-[2.5rem] bg-slate-900/40 text-white p-6 text-center shadow-2xl border border-appOrange"
			key={id}
		>
			<div className="producer-header text-2xl relative w-full flex justify-between align-middle -mt-10 mx-10 h-24">
				<SafetyOutlined className="absolute -right-10 top-10 rounded-tr-full rounded-bl-full bg-appOrange px-8 py-2 -m-6" />
				<Image
					className="absolute top-0 left-0 rounded-full h-28 w-28 shadow shadow-appOrange"
					width={100}
					height={100}
					src={img}
					alt=""
					loading="lazy"
				/>
			</div>
			<div className="producer-info flex flex-col text-left mt-10">
				<h5 className="text-3xl font-bold">Hassan BABA</h5>
				<p className="text-gray-500 text-2xl">آهنگساز</p>
				<small className="text-appOrange">187 دنبال کننده</small>
			</div>
			<Descriptions />
		</div>
	);
}
