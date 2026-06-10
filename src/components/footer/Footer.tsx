import { Flex, Layout } from "antd";
import FooterDescription from "./FooterDescription.tsx";
import FooterNavigation from "./FooterNavigation.tsx";

const { Footer: FooterAntD } = Layout;

function Footer() {
	return (
		<FooterAntD>
			<div className="max-w-6xl mx-auto">
				<Flex
					gap="medium"
					justify="space-between"
				>
					<FooterDescription />

					<FooterNavigation />
				</Flex>
			</div>
		</FooterAntD>
	);
}

export default Footer;
