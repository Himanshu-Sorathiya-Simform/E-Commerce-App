import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, ConfigProvider, Drawer, Flex, Input } from "antd";
import { useState } from "react";
import { useCart } from "../../context/cartContext.tsx";
import CartInformation from "../cart/CartInformation.tsx";

function HeaderPrimary() {
	const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
	const { totalItems } = useCart();

	return (
		<Flex
			align="center"
			justify="space-between"
			gap={60}
			style={{
				backgroundColor: "var(--color-secondary)",
				maxWidth: 1280,
				margin: "0 auto",
				padding: 16,
				fontSize: 18,
			}}
		>
			<div>
				<ShoppingCartOutlined />
			</div>

			<Flex gap="middle">
				<Button
					type="text"
					style={{ fontSize: "1.125rem" }}
				>
					Deals
				</Button>

				<Button
					type="text"
					style={{ fontSize: "1.125rem" }}
				>
					What's New
				</Button>

				<Button
					type="text"
					style={{ fontSize: "1.125rem" }}
				>
					Delivery
				</Button>
			</Flex>

			<Flex style={{ flex: 1 }}>
				<ConfigProvider
					theme={{
						components: {
							Input: {
								borderRadius: 9999,
								inputFontSize: 16,
								paddingBlock: 10,
								paddingInline: 16,
								activeBorderColor: "var(--color-primary)",
								hoverBorderColor: "var(--color-primary)",
							},
						},
					}}
				>
					<Input placeholder="Search Product" />
				</ConfigProvider>
			</Flex>

			<Flex gap="medium">
				<Button
					size="large"
					shape="round"
					style={{ fontSize: "1.125rem" }}
				>
					<UserOutlined />
					Account
				</Button>

				<Badge count={totalItems}>
					<Button
						size="large"
						shape="round"
						style={{ fontSize: "1.125rem" }}
						onClick={() => setCartDrawerOpen(true)}
					>
						<ShoppingCartOutlined />
						Cart
					</Button>
				</Badge>
			</Flex>

			<Drawer
				title="Your Cart"
				placement="right"
				size={"30%"}
				open={cartDrawerOpen}
				onClick={() => setCartDrawerOpen(false)}
				mask={{ blur: true }}
			>
				<CartInformation />
			</Drawer>
		</Flex>
	);
}

export default HeaderPrimary;
