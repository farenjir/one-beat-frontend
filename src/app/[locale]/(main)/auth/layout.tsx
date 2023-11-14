import { PropsWithParams } from "@/types";

export default function Layout({ children, params: { locale } }: PropsWithParams) {
	return <>{children}</>;
}
