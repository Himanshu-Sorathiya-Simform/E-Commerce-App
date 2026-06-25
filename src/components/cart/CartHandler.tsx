import { useAppDispatch } from "@/hooks/hooks.ts";
import { addToCart, removeFromCart } from "@/slices/cartSlice.ts";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
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
	const dispatch = useAppDispatch();

	return (
		<Compact>
			<Button
				size={size}
				style={{
					borderStartStartRadius: "9999px",
					borderEndStartRadius: "9999px",
				}}
				onClick={() => dispatch(removeFromCart(product.id))}
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
				onClick={() => dispatch(addToCart(product.id))}
				icon={<PlusOutlined />}
			/>
		</Compact>
	);
}

export default CartHandler;
