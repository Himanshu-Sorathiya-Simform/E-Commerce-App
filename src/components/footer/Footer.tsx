import { Button, Flex, Layout, Typography } from "antd";

const { Footer: FooterAntD } = Layout;
const { Paragraph } = Typography;

interface FooterProps {
	focus: () => void;
}

function Footer({ focus }: FooterProps) {
	return (
		<FooterAntD
			style={{
				backgroundColor: "white",
				borderTop: "1px solid #ddd",
				padding: "0.5rem",
			}}
		>
			<Flex
				justify="center"
				align="center"
				gap="large"
			>
				<Paragraph
					style={{
						margin: "0 0 0 0",
						textAlign: "center",
						fontSize: "1rem",
					}}
				>
					{new Date().getFullYear()} &copy; All rights reserved.
				</Paragraph>

				<Button
					type="default"
					onClick={focus}
				>
					Focus on Search
				</Button>
			</Flex>
		</FooterAntD>
	);
}

export default Footer;
