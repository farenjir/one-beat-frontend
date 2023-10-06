import "@/assets/styles/global.css";

import { Inter } from "next/font/google";

import GlobalStateManagements from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<GlobalStateManagements>{children}</GlobalStateManagements>
			</body>
		</html>
	);
}
