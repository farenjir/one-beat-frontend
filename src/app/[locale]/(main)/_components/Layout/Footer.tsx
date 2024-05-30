import Image from "next/image";
import { Col, Row } from "antd";

import { GlobalProps } from "@/types";
import { getDictionary } from "@/assets/langs";

export default async function MainFooter({ locale }: Pick<GlobalProps, "locale">) {
	const dict = await getDictionary(locale);
	return (
		<footer className="bg-black bg-gradient-to-t from-[black] footer px-8 lg:px-14 py-8">
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={10}>
					<Image
						src={"/assets/images/header-logo.png"}
						alt="guaranty-u-img"
						className="rounded-full my-5 lg:mx-5"
						width={100}
						height={100}
						loading="lazy"
					/>
					<p className="text-xs text-appGrey px-5">
						توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر
						از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت از یک بیت توضیح مختصر از یک بیت توضیح مختصر از
						یک بیت ...
					</p>
				</Col>
				<Col xs={24} lg={3}>
					<h5 className="text-xl m-2 text-white">دسترسی سریع</h5>
					<ul className="list-disc text-appGrey">
						<li className="cursor-pointer">صفحه اصلی</li>
						<li className="cursor-pointer">راهنمای مشتریان</li>
						<li className="cursor-pointer">ورود و ثبت نام</li>
						<li className="cursor-pointer">بلاگ</li>
						<li className="cursor-pointer">فروشگاه</li>
					</ul>
				</Col>
				<Col xs={24} lg={3}>
					<h5 className="text-xl m-2 text-white">دسترسی سریع</h5>
					<ul className="list-disc text-appGrey">
						<li className="cursor-pointer">صفحه اصلی</li>
						<li className="cursor-pointer">راهنمای مشتریان</li>
						<li className="cursor-pointer">ورود و ثبت نام</li>
						<li className="cursor-pointer">بلاگ</li>
						<li className="cursor-pointer">فروشگاه</li>
					</ul>
				</Col>
				<Col xs={24} lg={3}>
					<h5 className="text-xl m-2 text-white">خدمات ما</h5>
					<ul className="list-disc text-appGrey">
						<li className="cursor-pointer">صفحه اصلی</li>
						<li className="cursor-pointer">راهنمای مشتریان</li>
						<li className="cursor-pointer">ورود و ثبت نام</li>
						<li className="cursor-pointer">بلاگ</li>
						<li className="cursor-pointer">فروشگاه</li>
					</ul>
				</Col>
				<Col xs={24} lg={4}>
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
				<Col xs={24} className="mt-5">
					<div className="flex flex-col justify-center items-center border-t-[1px] border-appGrey rounded-2xl">
						<Image
							src={"/assets/images/logo-dark.svg"}
							alt="logo-mini-img"
							className="rounded-full mt-6 mb-3"
							width={50}
							height={50}
							loading="lazy"
						/>
						<small className="text-appGrey">Copyright © 2024 1Beat, Inc</small>
						<small className="text-appGrey">Design By : ENDLESS PLUS</small>
					</div>
				</Col>
			</Row>
		</footer>
	);
}
