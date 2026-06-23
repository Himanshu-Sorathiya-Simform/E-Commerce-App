import SigninForm from "@/components/auth/SigninForm.tsx";
import SignupForm from "@/components/auth/SignupForm.tsx";
import Content from "@/components/content/Content.tsx";
import DetailedProductPage from "@/components/product/DetailedProductPage.tsx";
import ErrorBoundary from "@/components/ui/ErrorBoundary.tsx";
import AppLayout from "@/layouts/AppLayout.tsx";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import RootLayout from "@/layouts/RootLayout.tsx";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute, PublicRoute } from "./Route.tsx";

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
								element: (
									<ErrorBoundary
										fallback={"An Error occur in Content"}
									>
										<Content />
									</ErrorBoundary>
								),
							},
							{
								path: ":category",
								element: (
									<ErrorBoundary
										fallback={"An Error occur in Content"}
									>
										<Content />
									</ErrorBoundary>
								),
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

export { router };
