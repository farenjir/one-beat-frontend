import { PropsWithParams } from "@/types/configs";

export default function MainLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
