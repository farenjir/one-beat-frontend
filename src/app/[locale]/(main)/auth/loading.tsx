import { Skeleton } from "antd";

export default function Loading() {
	return (
		<div className="w-[20vw] h-[30vh] flex flex-col gap-3">
			<Skeleton active />
			<Skeleton active />
		</div>
	);
}
