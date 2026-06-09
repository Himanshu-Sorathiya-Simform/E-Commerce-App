import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Dropdown as DropdownAntD, Space, Typography } from "antd";
import type { ItemType } from "antd/es/menu/interface";
import { useState } from "react";

interface DropdownProps {
	items: ItemType[];
	initialSelected?: string;
	defaultLabel?: string;
	theme?: {
		selectedColor?: string;
		labelColor?: string;
		labelFontSize?: string;
		controlItemBgActive?: string;
		controlItemBgActiveHover?: string;
	};
}

function Dropdown({ items, initialSelected, defaultLabel, theme }: DropdownProps) {
	const [selectedKey, setSelectedKey] = useState(initialSelected ?? "");

	const selectedItem = items.find((item) => item?.key === selectedKey);
	const currentLabel =
		selectedItem && "label" in selectedItem ?
			(selectedItem.label as React.ReactNode)
		:	(defaultLabel ?? "Select");

	const handleClick: MenuProps["onClick"] = (e) => {
		setSelectedKey(e.key);
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						colorPrimary: theme?.selectedColor ?? "white",
						controlItemBgActive:
							theme?.controlItemBgActive ?? "rgba(0,61,41,0.85)",
						controlItemBgActiveHover:
							theme?.controlItemBgActiveHover
							?? "var(--color-primary)",
					},
				},
			}}
		>
			<DropdownAntD
				menu={{
					items: items ?? [],
					selectable: true,
					defaultSelectedKeys: [selectedKey],
					onClick: handleClick,
				}}
			>
				<Typography.Link
					style={{
						color: theme?.labelColor ?? "white",
						fontSize: theme?.labelFontSize ?? "14px",
					}}
				>
					<Space size={16}>
						<span className="text-nowrap">{currentLabel}</span>
						<DownOutlined />
					</Space>
				</Typography.Link>
			</DropdownAntD>
		</ConfigProvider>
	);
}

export default Dropdown;
