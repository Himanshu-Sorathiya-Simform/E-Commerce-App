import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useCart } from "../../context/cartContext.tsx";
import type { DetailedProduct } from "../../types/product.types.ts";

const { Compact } = Space;

interface CartHandlerProps {
	product: DetailedProduct;
	productCartQuantity: number;
	size?: "small" | "medium" | "large";
}

function CartHandler({
	product,
	productCartQuantity,
	size = "large",
}: CartHandlerProps) {
	const { addToCart, removeFromCart } = useCart();

	return (
		<Compact>
			<Button
				size={size}
				style={{
					borderStartStartRadius: "9999px",
					borderEndStartRadius: "9999px",
				}}
				onClick={() => removeFromCart(product.id)}
				icon={<MinusOutlined />}
			/>

			<Button
				size={size}
				disabled
				style={{
					color: "#000",
					cursor: "default",
					fontWeight: "600",
					fontSize: size === "large" ? "18px" : "14px",
				}}
			>
				{productCartQuantity}
			</Button>

			<Button
				size={size}
				style={{
					borderStartEndRadius: "9999px",
					borderEndEndRadius: "9999px",
				}}
				onClick={() => addToCart(product.id)}
				icon={<PlusOutlined />}
			/>
		</Compact>
	);
}

export default CartHandler;
