import AuthProvider from "@/context/authContext.tsx";
import { Outlet } from "react-router";

function RootLayout() {
	return (
		<div className="h-screen min-h-screen flex items-center justify-center">
			<AuthProvider>
				<Outlet />
			</AuthProvider>
		</div>
	);
}

export default RootLayout;
