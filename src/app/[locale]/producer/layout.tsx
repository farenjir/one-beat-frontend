import { PropsWithParams } from "@/types/configs";

export default function ProducerLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
