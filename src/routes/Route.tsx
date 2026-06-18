import { useAuth } from "@/context/authContext.tsx";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return (
			<Navigate
				to="/signin"
				replace
			/>
		);
	}

	return <Outlet />;
}

function PublicRoute() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return (
			<Navigate
				to="/"
				replace
			/>
		);
	}

	return <Outlet />;
}

export { ProtectedRoute, PublicRoute };
