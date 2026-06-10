import { Button, ConfigProvider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";

function App() {
	const [collapsed, setCollapsed] = useState(false);

	return (
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

					<Content style={{ width: "100%" }}>
						<Button
							type="text"
							onClick={() => setCollapsed(!collapsed)}
						>
							Collapse
						</Button>
					</Content>
				</Layout>

				<Footer />
			</Layout>
		</ConfigProvider>
	);
}

export default App;
