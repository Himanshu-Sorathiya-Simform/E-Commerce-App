import { ConfigProvider, Layout } from "antd";
import { useState } from "react";
import Content from "./components/content/Content.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import CategoriesProvider from "./context/categoriesContext.tsx";

function App() {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<CategoriesProvider>
			<ConfigProvider
				theme={{
					components: {
						Layout: {
							headerBg: "var(--color-secondary)",
							footerBg: "var(--color-secondary)",
							headerPadding: 0,
							headerHeight: "auto",
						},
					},
				}}
			>
				<Layout className="min-h-screen">
					<Header />

					<Layout>
						<Sidebar collapsed={collapsed} />

						<Content setCollapsed={setCollapsed} />
					</Layout>

					<Footer />
				</Layout>
			</ConfigProvider>
		</CategoriesProvider>
	);
}

export default App;
