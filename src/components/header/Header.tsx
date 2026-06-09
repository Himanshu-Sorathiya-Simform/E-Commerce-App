import { Layout } from "antd";
import HeaderPrimary from "./HeaderPrimery.tsx";
import HeaderSecondary from "./HeaderSecondary.tsx";

const { Header: HeaderAntD } = Layout;

function Header() {
	return (
		<HeaderAntD>
			<div className="flex flex-col">
				<HeaderSecondary />

				<HeaderPrimary />
			</div>
		</HeaderAntD>
	);
}

export default Header;
