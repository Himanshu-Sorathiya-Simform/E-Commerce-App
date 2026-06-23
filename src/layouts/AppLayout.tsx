import Footer from "@/components/footer/Footer.tsx";
import { type InputRef, ConfigProvider, Drawer, Flex } from "antd";
import { useRef, useState } from "react";
import { Outlet } from "react-router";
import CartInformation from "../components/cart/CartInformation.tsx";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import CartProvider from "../context/cartContext.tsx";
import CategoriesProvider from "../context/categoriesContext.tsx";
import ProductsProvider from "../context/productsContext.tsx";

function AppLayout() {
	const inputRef = useRef<InputRef>(null);

	const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

	function openCartDrawer() {
		setCartDrawerOpen(true);
	}

	function focus() {
		inputRef?.current?.focus();
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
						<Flex
							vertical
							style={{
								width: "100%",
							}}
						>
							<Flex
								vertical
								style={{
									height: "100vh",
									overflow: "hidden",
								}}
							>
								<Header
									inputRef={inputRef}
									openCartDrawer={openCartDrawer}
								/>

								<Flex
									style={{
										height: "100%",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<Sidebar collapsed={false} />

									<Outlet />
								</Flex>

								<Footer focus={focus} />
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
