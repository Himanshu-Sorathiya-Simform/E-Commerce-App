import { Outlet } from "react-router";

function RootLayout() {
	return (
		<div className="h-screen min-h-screen flex items-center justify-center">
			<Outlet />
		</div>
	);
}

export default RootLayout;
