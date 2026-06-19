import { createBrowserRouter, RouterProvider } from "react-router";
import SigninForm from "./components/auth/SigninForm.tsx";
import SignupForm from "./components/auth/SignupForm.tsx";
import Content from "./components/content/Content.tsx";
import DetailedProductPage from "./components/product/DetailedProductPage.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import { ProtectedRoute, PublicRoute } from "./routes/Route.tsx";

const router = createBrowserRouter([
	{
		Component: RootLayout,
		children: [
			{
				element: <ProtectedRoute />,
				children: [
					{
						element: <AppLayout />,
						children: [
							{
								index: true,
								element: <Content />,
							},
							{
								path: ":category",
								element: <Content />,
							},
							{
								path: ":category/:productId",
								element: <DetailedProductPage />,
							},
						],
					},
				],
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
