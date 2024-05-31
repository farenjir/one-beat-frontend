import gStyle from "@/assets/styles/global.module.css";

import { GlobalProps } from "@/types";

export default function MainLayout({ children }: Pick<GlobalProps, "children" | "params">) {
	return (
		<div className={gStyle["main__home-container"]}>
			<div className="h-screen w-full grid place-content-center">
				<div className="bg-gray-50 pt-5 px-1 mx-2 rounded-lg">{children}</div>
			</div>
		</div>
	);
}
