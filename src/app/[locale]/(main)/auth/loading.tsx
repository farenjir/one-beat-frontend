// export default function Loading() {
// 	// You can add any UI inside Loading, including a Skeleton.
// 	return null;
// }

import Skeleton from "react-loading-skeleton";

export default function Loading({ count = 1 }: { count: number }) {
	return (
		<Skeleton count={count} direction="rtl" duration={2} height={50} baseColor="#f8f8f8" highlightColor="#d8d8d8" />
	);
}
