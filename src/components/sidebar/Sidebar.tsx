import { ConfigProvider, Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router";
import { categoryIconMap } from "../../constants/categoryIcons.ts";
import { useCategories } from "../../context/categoriesContext.tsx";
import { formatCategory } from "../../utils/categoryUtils.ts";
import SidebarItemSkeleton from "./SidebarItemSkeleton.tsx";

interface SidebarProps {
	collapsed: boolean;
}

function Sidebar({ collapsed }: SidebarProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const [, setSearchParams] = useSearchParams();
	const { category: currentCategory = "", productId } = useParams();

	const { categories, isLoading } = useCategories();

	function handleCategoryClick(clickedCategory: string) {
		if (currentCategory === clickedCategory && !productId) {
			navigate(`/${location.search}`);

			return;
		}

		navigate(`/${clickedCategory}/${location.search}`);

		setSearchParams((prev) => ({ ...prev, pageIndex: 1 }));
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
				width: "100%",
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
					<Flex
						justify="center"
						vertical
						style={{
							padding: "0.5rem 0 0 0.5rem",
						}}
					>
						{Array.from({ length: 24 }).map((_, i) => (
							<SidebarItemSkeleton key={i} />
						))}
					</Flex>
				:	<Menu
						style={{ height: "100%" }}
						tooltip={{ placement: "right" }}
						selectedKeys={[currentCategory]}
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
						onClick={(info) => handleCategoryClick(info.key)}
					/>
				}
			</ConfigProvider>
		</Sider>
	);
}

export default Sidebar;
