import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { categoryIcons } from "../../constants/categoryIcons.ts";
import { useCategories } from "../../context/categoriesContext.tsx";
import { formatCategory } from "../../utils/utils.ts";
import Loader from "../ui/Loader.tsx";

interface SidebarProps {
	collapsed: boolean;
}

function Sidebar({ collapsed }: SidebarProps) {
	const { categories, isLoading } = useCategories();

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
						defaultSelectedKeys={["1"]}
						tooltip={{ placement: "right" }}
						items={categories.map((category, idx) => {
							const Icon = categoryIcons[idx];

							return {
								key: category,
								icon: Icon ? <Icon /> : null,
								label: formatCategory(category),
							};
						})}
					/>
				}
			</ConfigProvider>
		</Sider>
	);
}

export default Sidebar;
