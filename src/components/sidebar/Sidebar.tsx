import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { categoryIconMap } from "../../constants/categoryIcons.ts";
import { useCategories } from "../../context/categoriesContext.tsx";
import { useProducts } from "../../context/productsContext.tsx";
import { formatCategory } from "../../utils/utils.ts";
import Loader from "../ui/Loader.tsx";

interface SidebarProps {
	collapsed: boolean;
}

function Sidebar({ collapsed }: SidebarProps) {
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

	const { categories, isLoading } = useCategories();
	const { setFilters } = useProducts();

	function handleSelect(selectedCategory: string) {
		const isCurrentSelection = selectedKeys.includes(selectedCategory);

		if (isCurrentSelection) {
			setSelectedKeys([]);
			setFilters([]);

			return;
		}

		setSelectedKeys([selectedCategory]);
		setFilters([
			{
				id: "category",
				field: "category",
				type: "text",
				operator: "equals",
				value: selectedCategory,
			},
		]);
	}

	return (
		<Sider
			width="15rem"
			style={{
				overflowY: "scroll",
				backgroundColor: "white",
				borderRight: "1px solid #ddd",
				scrollbarWidth: "thin",
				height: "100%",
			}}
			trigger={null}
			collapsible
			collapsed={collapsed}
		>
			<ConfigProvider
				theme={{
					components: {
						Menu: {
							itemHoverBg: "rgba(0,0,0,0.25)",
							itemSelectedBg: "rgba(0,61,41,0.3)",
							itemColor: "black",
							itemSelectedColor: "var(--color-primary)",
							fontSize: 16,
						},
					},
				}}
			>
				{isLoading ?
					<Loader />
				:	<Menu
						style={{ height: "100%" }}
						tooltip={{ placement: "right" }}
						selectedKeys={selectedKeys}
						items={categories.map((category) => {
							const Icon =
								categoryIconMap[category]
								?? categoryIconMap["fallback"];

							return {
								key: category,
								icon: Icon ? <Icon /> : null,
								label: formatCategory(category),
							};
						})}
						onClick={(info) => handleSelect(info.key)}
					/>
				}
			</ConfigProvider>
		</Sider>
	);
}

export default Sidebar;
