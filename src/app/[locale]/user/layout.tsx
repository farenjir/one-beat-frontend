import { PropsWithParams } from "@/types/configs";

export default function UserLayout({ children, params: { locale } }: PropsWithParams) {
	return <main className="container">{children}</main>;
}
