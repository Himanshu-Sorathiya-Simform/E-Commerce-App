import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Flex, Input } from "antd";

function HeaderPrimary() {
	return (
		<div
			style={{
				backgroundColor: "var(--color-secondary)",
			}}
		>
			<Flex
				align="center"
				justify="space-between"
				gap={60}
				style={{
					maxWidth: 1280,
					margin: "0 auto",
					padding: 16,
					fontSize: 18,
				}}
			>
				<div>
					<ShoppingCartOutlined />
				</div>

				<Flex gap={12}>
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

				<div style={{ flex: 1 }}>
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
				</div>

				<div>
					<Button
						type="text"
						style={{ fontSize: "1.125rem" }}
					>
						<UserOutlined />
						Account
					</Button>

					<Button
						type="text"
						style={{ fontSize: "1.125rem" }}
					>
						<ShoppingCartOutlined />
						Cart
					</Button>
				</div>
			</Flex>
		</div>
	);
}

export default HeaderPrimary;
