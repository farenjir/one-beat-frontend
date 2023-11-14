import { PropsWithParams } from "@/types";

export default function MainLayout({ children, params: { locale } }: PropsWithParams) {
	return <>{children}</>;
}
