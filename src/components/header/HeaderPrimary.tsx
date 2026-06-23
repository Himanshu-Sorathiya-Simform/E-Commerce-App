import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, ConfigProvider, Flex, Input } from "antd";
import { useCart } from "../../context/cartContext.tsx";

interface HeaderPrimaryProps {
	openCartDrawer: () => void;
}

function HeaderPrimary({ openCartDrawer }: HeaderPrimaryProps) {
	const { totalItems } = useCart();

	return (
		<Flex
			align="center"
			justify="space-between"
			gap={60}
			style={{
				backgroundColor: "var(--color-secondary)",
				maxWidth: 1280,
				width: "100%",
				margin: "0 auto",
				padding: 16,
				fontSize: 18,
			}}
		>
			<div>
				<ShoppingCartOutlined />
			</div>

			<Flex style={{ width: "100%" }}>
				<ConfigProvider
					theme={{
						components: {
							Input: {
								borderRadius: 9999,
								inputFontSize: 16,
								paddingBlock: 10,
								paddingInline: 16,
							},
						},
					}}
				>
					<Input
						style={{
							width: "100%",
						}}
						placeholder="Search Product"
					/>
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
						onClick={openCartDrawer}
					>
						<ShoppingCartOutlined />
						Cart
					</Button>
				</Badge>
			</Flex>
		</Flex>
	);
}

export default HeaderPrimary;
