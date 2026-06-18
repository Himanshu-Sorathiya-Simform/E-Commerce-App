interface AuthContext {
	isAuthenticated: boolean;
	user: User | null;
}

import type { User } from "@/types/user.types.ts";
import { type ReactNode, createContext, useContext } from "react";

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthContext>({
	isAuthenticated: false,
	user: null,
});

function AuthProvider({ children }: AuthProviderProps) {
	const userString = localStorage.getItem("e-com-user");

	const user = userString ? (JSON.parse(userString) as User) : null;
	const isAuthenticated = !!user;

	const ctxValue = { isAuthenticated, user };

	return <AuthContext value={ctxValue}>{children}</AuthContext>;
}

function useAuth() {
	const context = useContext(AuthContext);

	if (!context) throw new Error("useAuth must be called inside AuthProvider.");

	return context;
}

export default AuthProvider;
export { useAuth };
