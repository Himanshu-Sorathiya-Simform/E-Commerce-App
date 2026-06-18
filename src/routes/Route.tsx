import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
	const { authenticated } = useAuthContext();

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
	const { authenticated } = useAuthContext();

	if (isAuthenticated) {
		return (
			<Navigate
				to="/profile"
				replace
			/>
		);
	}

	return <Outlet />;
}

export { ProtectedRoute, PublicRoute };
