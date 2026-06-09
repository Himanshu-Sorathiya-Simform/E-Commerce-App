import { ConfigProvider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";

function App() {
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
			<Layout className="h-screen min-h-screen">
				<Header />

				<Content>Content</Content>

				<Footer />
			</Layout>
		</ConfigProvider>
	);
}

export default App;
