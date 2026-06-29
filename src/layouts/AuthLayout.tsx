import { useAuth } from "@/context/authContext.tsx";
import { Navigate, Outlet } from "react-router";

function AuthLayout() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) return <Navigate to="/" />;

	return (
		<section className="w-full max-w-xl min-w-md">
			<Outlet />
		</section>
	);
}

export default AuthLayout;
