import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, ConfigProvider, Flex, Input } from "antd";
import type { ChangeEvent } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { useCart } from "../../context/cartContext.tsx";

interface HeaderPrimaryProps {
	openCartDrawer: () => void;
}

function HeaderPrimary({ openCartDrawer }: HeaderPrimaryProps) {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const location = useLocation();

	const { totalItems } = useCart();

	function handleSearchQuery(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
		const value = e.target.value.trim();

		const newParams = new URLSearchParams(searchParams);

		if (!value) {
			newParams.delete("searchQuery");
		} else {
			newParams.set("searchQuery", value);
		}

		if (location.pathname !== "/") {
			navigate(`/?${newParams.toString()}`);
		} else {
			setSearchParams(newParams);
		}
	}

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
						onChange={handleSearchQuery}
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
