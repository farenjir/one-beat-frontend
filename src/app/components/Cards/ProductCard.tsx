import Image from "next/image";
import { twJoin } from "tailwind-merge";
import { CaretLeftOutlined, ShoppingOutlined } from "@ant-design/icons";

import { IProduct } from "@/types";
import { getLocaleConfigs } from "@/utils/global";

const TitleItem = () => (
	<li className="flex">
		<p className="truncate max-w-[220px]">POOLAD POOLAD</p>
		<span className="text-appOrange flex justify-end">
			<p className="mx-2 text-base">: سبک </p> <CaretLeftOutlined className="pb-1" />
		</span>
	</li>
);

const Title = () => (
	<div className="md:w-2/3 text-white">
		<div className="flex flex-col items-end justify-between h-full">
			<div className="beat-descriptions flex flex-col items-end">
				<h5 className="mb-2 text-4xl font-extrabold">واقعیت اینه</h5>
				<small className="mb-5 mx-2">
					<strong className="mx-1">POOLAD</strong> آهنگساز
				</small>
			</div>
			<ul className="list-outside text-xl grid gap-3">
				<TitleItem key="list-item-1" />
				<TitleItem key="list-item-2" />
				<TitleItem key="list-item-3" />
				<TitleItem key="list-item-4" />
			</ul>
			<button className="text-appOrange border border-appOrange rounded-lg cursor-pointer hover:bg-appOrangeLight hover:border-white hover:text-white w-full mt-3 md:mt-1 md:w-1/2 pt-1">
				<ShoppingOutlined />
				<span className="mx-1">خرید</span>
			</button>
		</div>
	</div>
);

const Description = ({ dir }: any) => (
	<div className={twJoin("w-3/4 text-white hidden md:block", dir)}>
		<p className="font-normal text-justify text-appGrey hover:text-white">
			لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
			از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده
			استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای
			صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه
			طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در
			نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان
			حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی
			می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
		</p>
	</div>
);

export default function ProductCard({ product }: { product: Partial<IProduct> }) {
	const { dirRevert, dir } = getLocaleConfigs();
	return (
		<div className={twJoin("single-card-layout", dirRevert)}>
			<section className="flex flex-col-reverse gap-3 md:flex-row-reverse">
				<Title />
				<Description dir={dir} />
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
