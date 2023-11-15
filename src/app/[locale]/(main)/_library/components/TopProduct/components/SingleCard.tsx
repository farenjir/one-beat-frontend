import Image from "next/image";

import { CaretLeftOutlined } from "@ant-design/icons";

import img from "./card-top.jpg";

const TitleItem = () => (
	<li className="flex">
		<p>POOLAD</p>
		<span className="text-appOrange flex justify-end">
			<p className="mx-2">: سبک </p> <CaretLeftOutlined className="pb-1" />
		</span>
	</li>
);

const Title = () => {
	return (
		<div className="grow-0 text-white">
			<div className="flex flex-col items-end">
				<h5 className="mb-2 text-4xl font-extrabold">واقعیت اینه</h5>
				<small className="mb-5 mx-2">
					<strong className="mx-1">POOLAD</strong> آهنگساز
				</small>
				<ul className="list-outside text-xl grid gap-3">
					<TitleItem />
					<TitleItem />
					<TitleItem />
					<TitleItem />
				</ul>
			</div>
		</div>
	);
};

const Description = () => (
	<div className="grow-0 text-white hidden md:block">
		{/* <div className="grow-0 text-white"> */}
		<div className="flex flex-col justify-between p-4 leading-normal">
			<h5 className="mb-2 text-2xl font-bold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
			<p className="mb-3 font-normal">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
			</p>
		</div>
	</div>
);

const ImageItem = () => (
	<div className="grow-0">
		<Image className="rounded-xl" src={img} alt="" loading="lazy" />
	</div>
);

const SingleCard = () => {
	return (
		<div className="single-card">
			<section className="flex flex-col-reverse md:flex-row">
				<Title />
				<Description />
				<ImageItem />
			</section>
		</div>
	);
};

export default SingleCard;
