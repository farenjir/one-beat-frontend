"use client";

import { ConfigProvider, Table, theme } from "antd";
import type { TableProps } from "antd/es/table";

import colorTokens from "@/utils/theme";

import { ILocale } from "@/types";
import { useLocaleConfigs } from "@/hooks";

interface IExtraProps {
	classes?: string;
	appLocale?: ILocale;
	themeMode?: {
		algorithm: "defaultAlgorithm" | "darkAlgorithm";
		token: "default" | "black" | "orange" | "red" | "green";
	};
}
const Tables = ({
	bordered = false,
	loading = false,
	size,
	expandable,
	showHeader,
	rowSelection,
	scroll = { x: "calc(400px + 50%)" },
	tableLayout,
	// classes
	classes = "",
	rowClassName = "",
	className = "",
	// pagination
	pagination = false,
	// components
	title,
	footer,
	// data
	columns = [],
	dataSource = [],
	// locale
	appLocale,
	themeMode = { algorithm: "defaultAlgorithm", token: "default" },
}: TableProps<any> & IExtraProps) => {
	const { localeConfigs } = useLocaleConfigs(appLocale);
	// handles
	const onChange = () => {};
	// return
	return (
		<ConfigProvider
			table={{ className: classes }}
			direction={localeConfigs?.dir}
			locale={localeConfigs?.locale}
			theme={{
				algorithm: theme[themeMode.algorithm],
				token: colorTokens[themeMode.token],
			}}
		>
			<Table
				columns={columns}
				dataSource={dataSource}
				{...{
					onChange,
					className,
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
				rowKey={(record) => record?.id || record?.key}
				pagination={pagination}
			/>
		</ConfigProvider>
	);
};

export default Tables;
