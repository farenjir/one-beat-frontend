import localFont from "next/font/local";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	style: "normal",
});

const yekan = localFont({
	variable: "--font-yekan",
	display: "swap",
	src: [
		{
			path: "../../assets/fonts/YekanBakh-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../assets/fonts/YekanBakh-Regular.woff",
			weight: "400",
			style: "normal",
		},
	],
});

export default { yekan, roboto };
