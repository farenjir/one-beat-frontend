interface IMainProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: IMainProps) {
	return <main className="container">{children}</main>;
}
