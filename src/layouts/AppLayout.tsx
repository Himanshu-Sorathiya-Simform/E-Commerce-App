import Footer from "@/components/footer/Footer.tsx";
import { ConfigProvider, Drawer, Flex } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import CartInformation from "../components/cart/CartInformation.tsx";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";

function AppLayout() {
	const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

	function openCartDrawer() {
		setCartDrawerOpen(true);
	}

	return (
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
					<Header openCartDrawer={openCartDrawer} />

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

					<Footer />
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
	);
}

export default AppLayout;
