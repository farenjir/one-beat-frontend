import gStyle from "@/assets/styles/global.module.css";

import { PropsWithParams } from "@/types";

export default function MainLayout({ children }: PropsWithParams) {
	return (
		<div className={gStyle["main__home-container"]}>
			<div className="h-screen w-full grid place-content-center">
				<div className="bg-gray-50 p-5 rounded-lg">{children}</div>
			</div>
		</div>
	);
}
