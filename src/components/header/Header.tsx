import { Flex, Layout } from "antd";
import HeaderPrimary from "./HeaderPrimary.tsx";
import HeaderSecondary from "./HeaderSecondary.tsx";

const { Header: HeaderAntD } = Layout;

interface HeaderProps {
	openCartDrawer: () => void;
}

function Header({ openCartDrawer }: HeaderProps) {
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

				<HeaderPrimary openCartDrawer={openCartDrawer} />
			</Flex>
		</HeaderAntD>
	);
}

export default Header;
