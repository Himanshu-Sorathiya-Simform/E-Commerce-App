import { apiSlice } from "@/services/apiSlice.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };
