import { ConfigProvider, Drawer, Flex } from "antd";
import { useState } from "react";
import CartInformation from "../components/cart/CartInformation.tsx";
import Content from "../components/content/Content.tsx";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import CartProvider from "../context/cartContext.tsx";
import CategoriesProvider from "../context/categoriesContext.tsx";
import ProductsProvider from "../context/productsContext.tsx";

function AppLayout() {
	const [collapsed, setCollapsed] = useState(false);
	const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

	function openCartDrawer() {
		setCartDrawerOpen(true);
	}

	return (
		<CategoriesProvider>
			<ProductsProvider>
				<CartProvider>
					<ConfigProvider
						theme={{
							token: {
								colorPrimary: "#003d29",
								fontFamily:
									'"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
							},
							components: {
								Layout: {
									headerBg: "var(--color-secondary)",
									footerBg: "var(--color-secondary)",
									headerPadding: 0,
									headerHeight: "auto",
								},
							},
						}}
					>
						<Flex vertical>
							<Flex
								vertical
								style={{
									height: "100vh",
									overflow: "hidden",
								}}
							>
								<Header openCartDrawer={openCartDrawer} />

								<Flex
									style={{
										height: "100%",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<Sidebar collapsed={collapsed} />

									<Content setCollapsed={setCollapsed} />
								</Flex>
							</Flex>
						</Flex>

						<Drawer
							title="Your Cart"
							placement="right"
							size={"30%"}
							open={cartDrawerOpen}
							onClose={() => setCartDrawerOpen(false)}
							mask={{ blur: true }}
						>
							<CartInformation />
						</Drawer>
					</ConfigProvider>
				</CartProvider>
			</ProductsProvider>
		</CategoriesProvider>
	);
}

export default AppLayout;
