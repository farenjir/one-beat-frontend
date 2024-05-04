import { useMemo } from "react";
import Image from "next/image";
import { SafetyOutlined, UserOutlined } from "@ant-design/icons";

import { IUser } from "@/types";
import { ProducerStatus } from "@/types/enums";

import img from "../test.jpg";

type Colors = "Grey" | "Blue" | "Orange";

interface ICard {
	id: string;
	color: Colors;
}

const Descriptions = ({ color }: Pick<ICard, "color">) => {
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
			<button className={`text-app${color} cursor-pointer pt-5`}>
				<span>ورود به صفحه</span>
				<UserOutlined className={`mx-2 p-1 rounded-full border border-app${color}`} />
			</button>
		</>
	);
};

export default function ProducersSingleCard({ producer }: { producer: IUser }) {
	const color: Colors = useMemo(() => {
		switch (producer?.kyc?.producerKyc) {
			case ProducerStatus.Accepted:
				return "Orange";
			case ProducerStatus.TopProducer:
				return "Blue";
			default:
				return "Grey";
		}
	}, [producer]);
	// return
	return (
		<div
			dir="rtl"
			className={`producer-card w-full rounded-3xl rounded-tr-[2.5rem] bg-appLightGrey text-white border border-app${color} p-6 text-center`}
		>
			<div className="producer-header text-2xl relative w-full flex justify-between align-middle -mt-10 mx-10 h-24">
				<SafetyOutlined
					className={`absolute -right-10 top-10 rounded-tr-full rounded-bl-full bg-app${color} px-8 py-2 -m-6`}
				/>
				<Image
					className={`absolute top-0 left-0 rounded-full h-28 w-28 shadow-md shadow-app${color}`}
					width={100}
					height={100}
					src={img}
					alt=""
					loading="lazy"
				/>
			</div>
			<div className="producer-info flex flex-col text-left mt-10">
				<h5 className="text-4xl font-bold">{producer?.profile?.nickname}</h5>
				<strong className="text-gray-500 text-3xl">آهنگساز</strong>
				<small className="text-white">187 دنبال کننده</small>
			</div>
			<Descriptions color={color} />
		</div>
	);
}
