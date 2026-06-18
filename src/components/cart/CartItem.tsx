import { Flex, Image, Skeleton, Typography } from "antd";
import type { Cart } from "../../types/cart.types.ts";
import type { DetailedProduct } from "../../types/product.types.ts";
import CartHandler from "./CartHandler.tsx";

interface CartItemProps {
	cartProduct: (DetailedProduct & Cart) | undefined;
}

const { Paragraph, Text } = Typography;

function CartItem({ cartProduct }: CartItemProps) {
	if (!cartProduct) return null;

	return (
		<Flex
			gap="large"
			style={{
				border: "1px solid #eeeeee",
				borderRadius: 8,
				padding: "0.5rem 1rem",
			}}
			align="center"
		>
			<Image
				preview={false}
				width={100}
				alt={cartProduct.title}
				src={cartProduct.thumbnail}
				style={{
					borderRadius: 16,
					backgroundColor: "rgba(0,0,0,0.05)",
					objectFit: "cover",
					flexShrink: 0,
				}}
				placeholder={
					<Skeleton.Image
						active
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							borderRadius: 16,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					/>
				}
			/>

			<Flex
				vertical
				gap="small"
			>
				<Paragraph style={{ margin: 0 }}>
					Name:{" "}
					<Text
						style={{
							fontWeight: "600",
						}}
					>
						{cartProduct.title}
					</Text>
				</Paragraph>

				<Flex
					gap="large"
					align="center"
				>
					<Paragraph style={{ margin: 0 }}>
						Price:{" "}
						<Text
							style={{
								fontWeight: "600",
							}}
						>
							${cartProduct.price}
						</Text>
					</Paragraph>

					<Paragraph style={{ margin: 0 }}>
						Quantity:{" "}
						<Text
							style={{
								fontWeight: "600",
							}}
						>
							{cartProduct.quantity}
						</Text>
					</Paragraph>

					<CartHandler
						product={cartProduct}
						productCartQuantity={cartProduct.quantity}
						size="medium"
					/>
				</Flex>

				<Paragraph style={{ margin: 0 }}>
					Total:{" "}
					<Text
						style={{
							fontWeight: "600",
						}}
					>
						${cartProduct.price} * {cartProduct.quantity} = $
						{cartProduct.price * cartProduct.quantity}
					</Text>
				</Paragraph>
			</Flex>
		</Flex>
	);
}

export default CartItem;
