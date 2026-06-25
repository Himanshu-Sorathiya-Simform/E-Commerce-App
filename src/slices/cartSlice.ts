import type { Cart } from "@/types/cart.types.ts";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
	cart: Cart[];
}

const initialState: CartState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {
			const item = state.cart.find((p) => p.productId === action.payload);

			if (item) {
				item.quantity += 1;
			} else {
				state.cart.push({ productId: action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const item = state.cart.find((p) => p.productId === action.payload);

			if (!item) return;

			if (item.quantity === 1) {
				state.cart = state.cart.filter(
					(p) => p.productId !== action.payload,
				);
			} else {
				item.quantity -= 1;
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
