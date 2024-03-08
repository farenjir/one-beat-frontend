import { Dropdown, MenuProps } from "antd";
import { DownOutlined, RedoOutlined } from "@ant-design/icons";

import { ILocale } from "@/types";
import { useLocaleConfigs } from "@/app/lib/hooks";

interface IDropDown {
	title: string;
	items: MenuProps["items"]; // key , label, icon, danger, disabled
	defaultSelectedKeys?: string[];
	trigger?: ("click" | "hover" | "contextMenu")[];
	disabled?: boolean;
	selectable?: boolean;
	arrow?: boolean;
	locale?: ILocale;
	classes?: string;
	titleClasses?: string;
	onClick?: MenuProps["onClick"];
}

const DropdownSelectable = ({
	title = "",
	items: menuItems = [],
	trigger = ["click", "hover"],
	defaultSelectedKeys = [],
	disabled = false,
	selectable = true,
	arrow = false,
	onClick = (_event) => {},
	classes = "",
	titleClasses = "",
	locale,
}: IDropDown) => {
	// hooks
	const { dict } = useLocaleConfigs(locale);
	const items = [
		...menuItems,
		{
			key: "reset",
			label: dict?.Common?.reset,
			icon: <RedoOutlined />,
			danger: true,
		},
	];
	// return
	return (
		<Dropdown
			key={title}
			menu={{
				items,
				selectable,
				onClick,
				defaultSelectedKeys,
			}}
			className={classes}
			{...{
				trigger,
				arrow,
				disabled,
			}}
			// dropdownRender={(menu) => (
			// 	<div>
			// 		{React.cloneElement(menu as React.ReactElement, {})}
			// 		<Buttons name="reset" classes="w-full" color="cancel" />
			// 	</div>
			// )}
		>
			<div className={`flex justify-between align-middle ${titleClasses}`}>
				<span>{title}</span>
				<DownOutlined />
			</div>
		</Dropdown>
	);
};

export default DropdownSelectable;
