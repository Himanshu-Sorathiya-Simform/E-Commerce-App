import type { User } from "@/types/user.types.ts";
import { getLocalStorageData } from "@/utils/localStorageUtils.ts";
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface AuthProviderProps {
	children: ReactNode;
}

interface AuthContext {
	isAuthenticated: boolean;
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContext | null>(null);

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState(() =>
		getLocalStorageData<User | null>("e-com-user", null),
	);
	const isAuthenticated = !!user;

	const ctxValue = { isAuthenticated, user, setUser };

	return <AuthContext value={ctxValue}>{children}</AuthContext>;
}

function useAuth() {
	const context = useContext(AuthContext);

	if (!context) throw new Error("useAuth must be called inside AuthProvider.");

	return context;
}

export default AuthProvider;
export { useAuth };
