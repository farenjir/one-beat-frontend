import { Skeleton } from "antd";

export default function Loading() {
	return (
		<div className="w-[24vw] h-[32vh] flex flex-col gap-3">
			<Skeleton active />
			<Skeleton active />
		</div>
	);
}
