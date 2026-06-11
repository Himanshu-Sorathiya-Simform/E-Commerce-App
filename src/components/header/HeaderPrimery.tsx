import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Input } from "antd";

function HeaderPrimary() {
	return (
		<div
			style={{
				backgroundColor: "var(--color-secondary)",
			}}
		>
			<div className="flex mx-auto items-center text-lg max-w-7xl justify-between p-4 gap-15">
				<div>
					<ShoppingCartOutlined />
				</div>

				<div className="flex gap-3">
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
				</div>

				<div className="flex-1">
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
			</div>
		</div>
	);
}

export default HeaderPrimary;
