import { GlobalProps } from "@/types";

export default function AdminLayout({ children, params: { locale } }: Pick<GlobalProps, "children" | "params">) {
	return <main className="container">{children}</main>;
}
