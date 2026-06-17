import { Button, Flex, Typography } from "antd";
import { useCart } from "../../context/cartContext.tsx";
import CartItem from "./CartItem.tsx";

const { Paragraph } = Typography;

function CartInformation() {
	const { cart } = useCart();

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

	return (
		<Flex
			gap="small"
			vertical
			style={{
				height: "100%",
			}}
		>
			{cart.map((cartItem) => (
				<CartItem cartItem={cartItem} />
			))}

			<Button
				type="primary"
				style={{ marginTop: "auto" }}
			>
				Check Out
			</Button>
		</Flex>
	);
}

export default CartInformation;
