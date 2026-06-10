import { Flex } from "antd";
import type { FooterItem } from "../../constants/footerItems.ts";
import FooterNavLink from "./FooterNavLink.tsx";

interface FooterNavListProps {
	navItem: FooterItem;
}

function FooterNavList({ navItem }: FooterNavListProps) {
	return (
		<Flex
			vertical
			gap="medium"
		>
			<p className="font-semibold text-lg">{navItem.title}</p>

			<ul className="flex flex-col gap-1 text-sm text-gray-600">
				{navItem.links.map((link) => (
					<FooterNavLink
						key={link.label}
						link={link}
					/>
				))}
			</ul>
		</Flex>
	);
}

export default FooterNavList;
