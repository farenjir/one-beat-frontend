import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";

import { IUser } from "@/types";
// import { ProducerStatus } from "@/types/enums";

// type Colors = "Grey" | "Blue" | "Orange";

// interface ICard {
// 	id: string;
// 	color: Colors;
// }

export default function ProducerCard({ producer }: { producer: IUser }) {
	// const color: Colors = () => {
	// 	switch (producer?.kyc?.producerKyc) {
	// 		case ProducerStatus.Accepted:
	// 			return "Orange";
	// 		case ProducerStatus.TopProducer:
	// 			return "Blue";
	// 		default:
	// 			return "Grey";
	// 	}
	// };

	// return
	return (
		<div
			className="producer-card relative flex flex-col justify-between p-5 pt-[100px] bg-appLightGrey max-w-[400px] lg:w-[400px] rounded-xl"
			dir="rtl"
		>
			<span className="absolute top-0 right-0 bg-black p-6 [clip-path:polygon(0%_0%,100%_100%,100%_0%)]">
				<span className="absolute top-2 right-2 bg-appOrange p-4 rounded-tr-lg"></span>
			</span>
			<Image
				className={`absolute top-0 left-0 rounded-full h-36 w-36 -mt-[66px]`}
				width={100}
				height={100}
				src={"/assets/images/test.jpg"}
				alt="test-img"
				loading="lazy"
			/>
			<div className="flex flex-col items-end">
				<p className="flex gap-2">
					<sup>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.56105 0.249476C8.22842 -0.0831586 7.68911 -0.0831587 7.35648 0.249476L5.73364 1.87231C5.59963 2.00632 5.41787 2.08161 5.22835 2.08161L2.93341 2.08161C2.463 2.08161 2.08165 2.46296 2.08165 2.93337L2.08165 5.22831C2.08165 5.41783 2.00636 5.59959 1.87235 5.7336L0.249476 7.35648C-0.0831586 7.68911 -0.0831587 8.22842 0.249476 8.56105L1.87235 10.1839C2.00636 10.3179 2.08165 10.4997 2.08165 10.6892V12.9842C2.08165 13.4546 2.46299 13.836 2.93341 13.836H5.22839C5.41791 13.836 5.59967 13.9112 5.73368 14.0453L7.35648 15.6681C7.68911 16.0007 8.22842 16.0007 8.56105 15.6681L10.1839 14.0453C10.3179 13.9112 10.4996 13.836 10.6891 13.836H12.9842C13.4546 13.836 13.836 13.4546 13.836 12.9842V10.6891C13.836 10.4996 13.9113 10.3178 14.0453 10.1838L15.6681 8.56105C16.0007 8.22842 16.0007 7.68911 15.6681 7.35648L14.0453 5.73371C13.9113 5.5997 13.836 5.41794 13.836 5.22842V2.93337C13.836 2.46296 13.4546 2.08161 12.9842 2.08161H10.6892C10.4997 2.08161 10.3179 2.00632 10.1839 1.87231L8.56105 0.249476Z"
								fill="#FFA800"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11.474 6.19152L7.034 10.6315L4.48047 8.07798L5.38391 7.17455L7.034 8.82467L10.5706 5.28809L11.474 6.19152Z"
								fill="white"
							/>
						</svg>
					</sup>
					<span className="text-white text-4xl">Hassan Baba</span>
				</p>
				<strong className="text-appGrey text-lg">آهنگساز سطح عادی</strong>
				<small className="text-appOrange">187 دنبال کننده</small>
			</div>
			<ul className="grid gap-3">
				<li className="mx-2 text-appGrey text-xs">
					تعداد آهنگ : <strong className="mx-2 text-white">172 آهنگ</strong>
				</li>
				<li className="mx-2 text-appGrey text-xs">
					سبک : <strong className="mx-2 text-white">هیپ هاپ , آر اند بی</strong>
				</li>
				<li className="mx-2 text-appGrey text-xs">
					میزان رضایت کاربران : <strong className="mx-2 text-white">% 98</strong>
				</li>
				<li className="mx-2 text-appGrey text-xs">
					سابقه کار : <strong className="mx-2 text-white">8 سال ( حرفه ای )</strong>
				</li>
			</ul>
			<div className="w-full flex justify-end text-sm font-thin">
				<button className="text-appOrange cursor-pointer">
					<span className="mx-2">ورود به صفحه</span>
					<UserOutlined className={`p-1 rounded-full border border-appOrange`} />
				</button>
			</div>
		</div>
	);
}
