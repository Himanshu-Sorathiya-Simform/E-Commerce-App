import { apiSlice } from "@/services/apiSlice.ts";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.ts";
import cartReducer from "../slices/cartSlice.ts";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export { store };
export type { AppDispatch, RootState };
