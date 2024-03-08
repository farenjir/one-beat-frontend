import Image from "next/image";
import { Col, Row } from "antd";

import { getDictionary } from "@/assets/langs";
import { PropsWithLocale } from "@/types";

export default async function MainFooter({ locale }: PropsWithLocale) {
	const dict = await getDictionary(locale);
	return (
		<footer className="main bg-black footer border-t border-appOrange p-10">
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={10}>
					<Image
						src={"/assets/images/header-logo.png"}
						alt="guaranty-u-img"
						className="rounded-full m-5"
						width={100}
						height={100}
						loading="lazy"
					/>
					<p className="text-xs text-slate-500 px-5">
						توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر
						از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت از یک بیت توضیح مختصر از یک بیت توضیح مختصر از
						یک بیت ...
					</p>
				</Col>
				<Col xs={24} lg={3}>
					<h5 className="text-xl m-2 text-white">دسترسی سریع</h5>
					<ul className="list-disc text-slate-500">
						<li className="cursor-pointer">صفحه اصلی</li>
						<li className="cursor-pointer">راهنمای مشتریان</li>
						<li className="cursor-pointer">ورود و ثبت نام</li>
						<li className="cursor-pointer">بلاگ</li>
						<li className="cursor-pointer">فروشگاه</li>
					</ul>
				</Col>
				<Col xs={24} lg={3}>
					<h5 className="text-xl m-2 text-white">دسترسی سریع</h5>
					<ul className="list-disc text-slate-500">
						<li className="cursor-pointer">صفحه اصلی</li>
						<li className="cursor-pointer">راهنمای مشتریان</li>
						<li className="cursor-pointer">ورود و ثبت نام</li>
						<li className="cursor-pointer">بلاگ</li>
						<li className="cursor-pointer">فروشگاه</li>
					</ul>
				</Col>
				<Col xs={24} lg={3}>
					<h5 className="text-xl m-2 text-white">خدمات ما</h5>
					<ul className="list-disc text-slate-500">
						<li className="cursor-pointer">صفحه اصلی</li>
						<li className="cursor-pointer">راهنمای مشتریان</li>
						<li className="cursor-pointer">ورود و ثبت نام</li>
						<li className="cursor-pointer">بلاگ</li>
						<li className="cursor-pointer">فروشگاه</li>
					</ul>
				</Col>
				<Col xs={24} lg={5}>
					<Row gutter={[2, 2]}>
						<Col span={12} className="img-fill">
							<Image
								src={"/assets/images/e-namad.png"}
								alt="eNamad-img"
								className="rounded-lg"
								height={150}
								width={150}
								loading="lazy"
							/>
						</Col>
						<Col span={12} className="img-fill">
							<Image
								src={"/assets/images/samandehi.png"}
								alt="samandehi-img"
								className="rounded-lg"
								height={150}
								width={150}
								loading="lazy"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</footer>
	);
}
