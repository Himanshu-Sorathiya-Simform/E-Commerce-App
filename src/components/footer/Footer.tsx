import { Flex, Layout } from "antd";
import FooterDescription from "./FooterDescription.tsx";
import FooterNavigation from "./FooterNavigation.tsx";

const { Footer: FooterAntD } = Layout;

function Footer() {
	return (
		<FooterAntD
			style={{
				backgroundColor: "white",
				position: "relative",
				borderTop: "1px solid #ddd",
			}}
		>
			<div
				style={{
					maxWidth: 1152,
					margin: "0 auto",
				}}
			>
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
