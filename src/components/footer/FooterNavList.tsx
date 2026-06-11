import { Flex, Typography } from "antd";
import type { FooterItem } from "../../constants/footerItems.ts";
import FooterNavLink from "./FooterNavLink.tsx";

const { Text } = Typography;

interface FooterNavListProps {
	navItem: FooterItem;
}

function FooterNavList({ navItem }: FooterNavListProps) {
	return (
		<Flex
			vertical
			gap="medium"
		>
			<Text
				strong
				style={{ fontSize: 18 }}
			>
				{navItem.title}
			</Text>

			<Flex
				component="ul"
				vertical
				gap={4}
				style={{
					fontSize: 14,
					color: "#4b5563",
				}}
			>
				{" "}
				{navItem.links.map((link) => (
					<FooterNavLink
						key={link.label}
						link={link}
					/>
				))}
			</Flex>
		</Flex>
	);
}

export default FooterNavList;
