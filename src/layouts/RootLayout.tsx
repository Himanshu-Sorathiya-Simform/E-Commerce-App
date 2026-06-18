import AuthProvider from "@/context/authContext.tsx";
import { Outlet } from "react-router";

function RootLayout() {
	return (
		<>
			<AuthProvider>
				<Outlet />
			</AuthProvider>
		</>
	);
}

export default RootLayout;
