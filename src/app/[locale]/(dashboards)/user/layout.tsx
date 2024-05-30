import { GlobalProps } from "@/types";

export default function UserLayout({ children, params: { locale } }: Pick<GlobalProps, "children" | "params">) {
	return <main className="container">{children}</main>;
}
