import gStyle from "@/assets/styles/global.module.css";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
	return (
		<div className={gStyle["loading-page"]}>
			<Spin
				size="large"
				indicator={
					<LoadingOutlined
						style={{
							fontSize: 90,
							fontWeight: 900,
							color: "orange",
						}}
						spin
					/>
				}
			/>
		</div>
	);
}
