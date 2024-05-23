import { ConfigProvider, Table, theme } from "antd";
import type { TableProps } from "antd/es/table";

import { ILocale } from "@/types";
import { uIdMaker } from "@/utils/global";

interface IExtraProps {
	classes?: string;
	appLocale?: ILocale;
	themeMode?: {
		algorithm: "defaultAlgorithm" | "darkAlgorithm";
	};
}
const Tables = ({
	bordered = false,
	loading = false,
	size,
	expandable,
	showHeader,
	rowSelection,
	scroll = { x: "calc(400px + 60%)" },
	tableLayout,
	// classes
	classes = "",
	rowClassName = "",
	// pagination
	pagination = false,
	// components
	title,
	footer,
	// data
	columns = [],
	dataSource = [],
	// locale
	themeMode = { algorithm: "defaultAlgorithm" },
}: TableProps<any> & IExtraProps) => {
	// handles
	const onChange = () => {};
	// return
	return (
		<ConfigProvider
			theme={{
				algorithm: theme[themeMode.algorithm],
			}}
		>
			<Table
				columns={columns}
				dataSource={dataSource}
				{...{
					onChange,
					className: classes,
					rowClassName,
					bordered,
					loading,
					size,
					expandable,
					showHeader,
					rowSelection,
					scroll,
					tableLayout,
					// components
					title,
					footer,
				}}
				rowKey={(record: { [key: string]: string | number }) => record?.id || record?.key || uIdMaker()}
				pagination={pagination}
			/>
		</ConfigProvider>
	);
};

export default Tables;
