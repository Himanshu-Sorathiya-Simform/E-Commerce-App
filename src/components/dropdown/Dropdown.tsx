import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Dropdown as DropdownAntD, Space, Typography } from "antd";
import type { ItemType } from "antd/es/menu/interface";
import { useState } from "react";

interface DropdownProps {
	items: ItemType[];
	initialSelected: string;
}

function Dropdown({ items, initialSelected }: DropdownProps) {
	const [selectedKey, setSelectedKey] = useState(initialSelected);

	const selectedItem = items.find((item) => item?.key === selectedKey);
	const currentLabel =
		selectedItem && "label" in selectedItem ?
			(selectedItem.label as React.ReactNode)
		:	"Select";

	const handleClick: MenuProps["onClick"] = (e) => {
		setSelectedKey(e.key);
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						colorPrimary: "white",
						controlItemBgActive: "rgba(0,61,41,0.85)",
						controlItemBgActiveHover: "var(--color-primary)",
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
				<Typography.Link style={{ color: "white" }}>
					<Space size={16}>
						<span>{currentLabel}</span>
						<DownOutlined />
					</Space>
				</Typography.Link>
			</DropdownAntD>
		</ConfigProvider>
	);
}

export default Dropdown;
