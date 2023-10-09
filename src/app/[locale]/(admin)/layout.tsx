import { PropsWithParams } from "@/types/configs";

export default function DashboardLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
