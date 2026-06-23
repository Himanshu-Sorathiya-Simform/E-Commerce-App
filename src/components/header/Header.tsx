import { type InputRef, Flex, Layout } from "antd";
import type { RefObject } from "react";
import HeaderPrimary from "./HeaderPrimary.tsx";
import HeaderSecondary from "./HeaderSecondary.tsx";

const { Header: HeaderAntD } = Layout;

interface HeaderProps {
	inputRef: RefObject<InputRef | null>;
	openCartDrawer: () => void;
}

function Header({ inputRef, openCartDrawer }: HeaderProps) {
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

				<HeaderPrimary
					inputRef={inputRef}
					openCartDrawer={openCartDrawer}
				/>
			</Flex>
		</HeaderAntD>
	);
}

export default Header;
