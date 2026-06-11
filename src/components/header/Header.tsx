import { Flex, Layout } from "antd";
import HeaderPrimary from "./HeaderPrimary.tsx";
import HeaderSecondary from "./HeaderSecondary.tsx";

const { Header: HeaderAntD } = Layout;

function Header() {
	return (
		<HeaderAntD
			style={{
				borderBottom: "1px solid #ddd",
			}}
		>
			<Flex
				vertical
				gap="small"
			>
				<HeaderSecondary />

				<HeaderPrimary />
			</Flex>
		</HeaderAntD>
	);
}

export default Header;
