import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout.tsx";
import RootLayout from "./layouts/RootLayout.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: AppLayout,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
