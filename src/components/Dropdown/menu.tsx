import React from "react";
import { Dropdown, MenuProps, Tooltip } from "antd";

interface IDropDown {
	title: string;
	items: MenuProps["items"]; // key , label, icon, danger, disabled
	tooltip?: string;
	size?: "large" | "middle" | "small";
	loading?: boolean;
	classes?: string;
	titleClasses?: string;
	btnClasses?: string;
	onClick?: MenuProps["onClick"];
	type?: "dashed" | "default" | "link" | "primary" | "text";
}

const DropdownMenu = ({
	title = "",
	items = [],
	onClick = (_event) => {},
	size = "middle",
	type = "default",
	loading = false,
	classes = "",
	titleClasses = "",
	btnClasses = "",
	tooltip = "",
}: IDropDown) => {
	// menuProps
	const menuProps = {
		items,
		onClick,
	};
	// return
	return (
		<Dropdown.Button
			menu={menuProps}
			size={size}
			type={type}
			className={`${classes}`}
			buttonsRender={([leftButton, rightButton]) => [
				<Tooltip title={tooltip} key="leftButton">
					{leftButton}
				</Tooltip>,
				React.cloneElement(rightButton as React.ReactElement<any, string>, { loading, className: btnClasses }),
			]}
		>
			<span className={titleClasses}>{title}</span>
		</Dropdown.Button>
	);
};

export default DropdownMenu;
