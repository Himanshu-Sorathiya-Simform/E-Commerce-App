import { type ReactNode, createContext, useContext, useState } from "react";
import type { Cart } from "../types/cart.types.ts";

interface CartProviderProps {
	children: ReactNode;
}

interface CartContext {
	cart: Cart[];
	addToCart: (productId: number) => void;
	removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContext>({
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
});

function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<Cart[]>([]);

	function addToCart(productId: number) {
		setCart((prev) => {
			const exists = prev.find((p) => p.productId === productId);

			if (!exists) return [...prev, { productId, quantity: 1 }];

			return prev.map((p) =>
				p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p,
			);
		});
	}

	function removeFromCart(productId: number) {
		setCart((prev) => {
			const exists = prev.find((p) => p.productId === productId);

			if (!exists) return prev;

			if (exists.quantity === 1) {
				return prev.filter((p) => p.productId !== productId);
			}

			return prev.map((p) =>
				p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p,
			);
		});
	}

	const ctxValue = { cart, addToCart, removeFromCart };

	return <CartContext value={ctxValue}>{children}</CartContext>;
}

function useCart() {
	const context = useContext(CartContext);

	if (!context) throw new Error("useCart must be called inside CartProvider.");

	return context;
}

export default CartProvider;
export { useCart };
