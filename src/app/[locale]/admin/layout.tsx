import { PropsWithParams } from "@/types/configs";

export default function AdminLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
