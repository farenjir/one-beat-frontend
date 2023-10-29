import { PropsWithParams } from "@/types";

export default function AdminLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
