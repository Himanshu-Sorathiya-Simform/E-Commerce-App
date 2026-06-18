import { createBrowserRouter, RouterProvider } from "react-router";
import SigninForm from "./components/auth/SigninForm.tsx";
import SignupForm from "./components/auth/SignupForm.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import { PublicRoute } from "./routes/Route.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: AppLayout,
			},
			{
				element: <PublicRoute />,
				children: [
					{
						element: <AuthLayout />,
						children: [
							{
								path: "/signin",
								element: <SigninForm />,
							},
							{
								path: "/signup",
								element: <SignupForm />,
							},
						],
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
