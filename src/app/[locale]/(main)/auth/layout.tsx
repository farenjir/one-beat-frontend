import { PropsWithParams } from "@/types";

export default function MainLayout({ children }: PropsWithParams) {
	return (
		<section className="h-full w-full grid place-content-center">
			<div className="bg-gray-50 p-5 rounded-lg">{children}</div>
		</section>
	);
}
