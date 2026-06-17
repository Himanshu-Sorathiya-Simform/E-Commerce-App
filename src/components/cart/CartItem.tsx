import { Flex, Image, Skeleton, Typography } from "antd";
import { useProducts } from "../../context/productsContext.tsx";
import type { Cart } from "../../types/cart.types.ts";

interface CartItemProps {
	cartItem: Cart;
}

const { Paragraph, Text } = Typography;

function CartItem({ cartItem }: CartItemProps) {
	const { products } = useProducts();

	const product = products.find((product) => product.id === cartItem.productId);

	if (!product) return null;

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
				alt={product.title}
				src={product.thumbnail}
				style={{
					borderRadius: 16,
					backgroundColor: "rgba(0,0,0,0.05)",
					objectFit: "cover",
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
				gap={0}
			>
				<Paragraph>
					Name:{" "}
					<Text
						style={{
							fontWeight: "600",
						}}
					>
						{product.title}
					</Text>
				</Paragraph>

				<Flex gap="large">
					<Paragraph>
						Price:{" "}
						<Text
							style={{
								fontWeight: "600",
							}}
						>
							${product.price}
						</Text>
					</Paragraph>

					<Paragraph>
						Quantity:{" "}
						<Text
							style={{
								fontWeight: "600",
							}}
						>
							{cartItem.quantity}
						</Text>
					</Paragraph>
				</Flex>

				<Paragraph>
					Total:{" "}
					<Text
						style={{
							fontWeight: "600",
						}}
					>
						${product.price} * {cartItem.quantity} = $
						{product.price * cartItem.quantity}
					</Text>
				</Paragraph>
			</Flex>
		</Flex>
	);
}

export default CartItem;
