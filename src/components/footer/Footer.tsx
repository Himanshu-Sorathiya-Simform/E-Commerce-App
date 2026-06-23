import { Layout, Typography } from "antd";

const { Footer: FooterAntD } = Layout;
const { Paragraph } = Typography;

function Footer() {
	return (
		<FooterAntD
			style={{
				backgroundColor: "white",
				borderTop: "1px solid #ddd",
				padding: "0.5rem 0",
			}}
		>
			<Paragraph
				style={{
					margin: 0,
					textAlign: "center",
					fontSize: "1rem",
				}}
			>
				{new Date().getFullYear()} &copy; All rights reserved.
			</Paragraph>
		</FooterAntD>
	);
}

export default Footer;
