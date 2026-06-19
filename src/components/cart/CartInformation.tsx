import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { useCart } from "../../context/cartContext.tsx";
import { useProducts } from "../../context/productsContext.tsx";
import type { Cart } from "../../types/cart.types.ts";
import type { DetailedProduct } from "../../types/product.types.ts";
import CartItem from "./CartItem.tsx";

const { Paragraph, Text } = Typography;

function CartInformation() {
	const { cart } = useCart();
	const { products } = useProducts();

	const cartProducts = cart.map(
		(cartItem): (DetailedProduct & Cart) | undefined => {
			const product = products.find(
				(product) => product.id === cartItem.productId,
			);

			if (!product) return;

			return { ...cartItem, ...product };
		},
	);

	if (!cart.length)
		return (
			<Paragraph
				style={{
					fontSize: 16,
					fontWeight: 400,
				}}
			>
				You have not added any things in cart yet.
			</Paragraph>
		);

	const totalBill = cartProducts.reduce(
		(acc, curr) => acc + (curr?.price ?? 0) * (curr?.quantity ?? 0),
		0,
	);

	return (
		<Flex
			gap="large"
			vertical
			style={{
				height: "100%",
			}}
		>
			{cartProducts.map((cartProduct) => (
				<CartItem
					key={cartProduct?.id}
					cartProduct={cartProduct}
				/>
			))}

			<Button
				type="primary"
				size="large"
				style={{ marginTop: "auto", fontSize: "18px" }}
			>
				<Paragraph style={{ margin: 0, color: "white", fontSize: "18px" }}>
					Check Out{" "}
					<Text
						style={{
							fontWeight: 600,
							color: "white",
							fontSize: "18px",
						}}
					>
						${totalBill.toFixed(2)} <ArrowRightOutlined />
					</Text>
				</Paragraph>
			</Button>
		</Flex>
	);
}

export default CartInformation;
