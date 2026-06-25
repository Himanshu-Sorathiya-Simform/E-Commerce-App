import { useAppSelector } from "@/hooks/hooks.ts";
import { Navigate, Outlet } from "react-router";

function AuthLayout() {
	const { user } = useAppSelector((state) => state.auth);

	if (user) return <Navigate to="/" />;

	return (
		<section className="w-full max-w-xl min-w-md">
			<Outlet />
		</section>
	);
}

export default AuthLayout;
