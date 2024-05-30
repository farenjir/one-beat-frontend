import { GlobalProps } from "@/types";

export default function ProducerLayout({ children, params: { locale } }: Pick<GlobalProps, "children" | "params">) {
	return <main className="container">{children}</main>;
}
