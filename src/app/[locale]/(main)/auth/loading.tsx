import { Skeleton } from "antd";

export default function Loading() {
	return (
		<div className="w-[25vw] h-[35vh] flex flex-col gap-3">
			<Skeleton active />
			<Skeleton active />
		</div>
	);
}
