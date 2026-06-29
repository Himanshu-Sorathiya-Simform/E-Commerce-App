import { useAppSelector } from "@/hooks/hooks.ts";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
	const { user } = useAppSelector((state) => state.auth);

	if (!user) {
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
	const { user } = useAppSelector((state) => state.auth);

	if (user) {
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
