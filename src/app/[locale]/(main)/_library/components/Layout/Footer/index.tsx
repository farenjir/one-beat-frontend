import Image from "next/image";
import { Col, Row } from "antd";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { getDictionary } from "@/langs";
import { PropsWithLocale } from "@/types";

import logo from "@/assets/images/header-logo.png";
import eNamad from "@/assets/images/e-namad.png";
import samandehi from "@/assets/images/samandehi.png";

export default async function MainFooter({ locale }: PropsWithLocale) {
	const dict = await getDictionary(locale);
	return (
		<footer className="main footer border-t border-appOrange rounded-3xl p-10">
			<Row gutter={[8, 8]}>
				<Col xs={24} lg={10}>
					<Image
						src={logo}
						alt="guaranty-u-img"
						className="rounded-full m-5"
						width={100}
						height={100}
						loading="lazy"
					/>
					<p className="text-xs text-slate-500 px-5">
						توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت توضیح مختصر
						از یک بیت توضیح مختصر از یک بیت توضیح مختصر از یک بیت ...
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
							<Image src={eNamad} alt="eNamad-img" className="rounded-lg" height={150} loading="lazy" />
						</Col>
						<Col span={12} className="img-fill">
							<Image src={samandehi} alt="samandehi-img" className="rounded-lg" height={150} loading="lazy" />
						</Col>
					</Row>
				</Col>
			</Row>
		</footer>
	);
}
