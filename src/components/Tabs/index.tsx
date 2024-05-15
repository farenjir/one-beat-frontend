import { Tabs } from "antd";

interface ITab {
	key: string;
	label: string | React.ReactNode;
	content: any;
}

interface ITabs {
	items: ITab[];
	size?: "large" | "middle" | "small";
	tabPosition?: "top" | "right" | "bottom" | "left";
	type?: "line" | "card" | "editable-card";
	classes?: string;
	tabClasses?: string;
	defaultActiveKey?: string;
	centered?: boolean;
	tabBarGutter?: number;
	onChange?: (_activeKey: string) => void;
}

const TabMenu = ({
	defaultActiveKey = "1",
	items = [],
	type = "line",
	size = "middle",
	tabPosition = "top",
	centered = false,
	tabBarGutter = 0,
	onChange = (_activeKey: string): void => {},
	// tabs
	tabClasses = "",
	classes = "",
}: ITabs) => {
	return (
		<Tabs
			{...{ defaultActiveKey, centered, type, size, tabBarGutter, tabPosition, onChange }}
			className={classes}
			items={items.map(({ key, content, label }) => ({
				key,
				id: key,
				label,
				className: tabClasses,
				children: content,
			}))}
		/>
	);
};

export default TabMenu;
