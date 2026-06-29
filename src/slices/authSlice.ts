import type { User } from "@/types/user.types";
import { getLocalStorageData } from "@/utils/localStorageUtils.ts";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
	user: User | null;
}

const initialState: AuthState = {
	user: getLocalStorageData<User | null>("e-com-user", null),
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
		},
	},
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
