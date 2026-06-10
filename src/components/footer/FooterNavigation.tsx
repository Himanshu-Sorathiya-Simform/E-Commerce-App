import { footerItems } from "../../constants/footerItems.ts";
import FooterNavList from "./FooterNavList.tsx";

function FooterNavigation() {
	return footerItems.map((navItem) => (
		<FooterNavList
			key={navItem.title}
			navItem={navItem}
		/>
	));
}

export default FooterNavigation;
