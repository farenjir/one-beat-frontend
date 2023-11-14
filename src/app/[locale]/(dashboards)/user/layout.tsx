import { PropsWithParams } from "@/types";

export default function UserLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
