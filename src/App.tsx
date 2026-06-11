import { ConfigProvider, Flex } from "antd";
import { useState } from "react";
import Content from "./components/content/Content.tsx";
import Header from "./components/header/Header.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import CategoriesProvider from "./context/categoriesContext.tsx";
import ProductsProvider from "./context/productsContext.tsx";

function App() {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<CategoriesProvider>
			<ProductsProvider>
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
					<Flex vertical>
						<Flex
							vertical
							style={{ height: "100vh", overflow: "hidden" }}
						>
							<Header />

							<Flex
								style={{
									height: "100%",
									position: "relative",
									overflow: "hidden",
								}}
							>
								<Sidebar collapsed={collapsed} />

								<Content setCollapsed={setCollapsed} />
							</Flex>
						</Flex>

						{/* <Footer /> */}
					</Flex>
				</ConfigProvider>
			</ProductsProvider>
		</CategoriesProvider>
	);
}

export default App;
