import { footerData } from "../../constants/footerData.ts";
import FooterNavList from "./FooterNavList.tsx";

function FooterNavigation() {
	return footerData.map((navItem) => <FooterNavList navItem={navItem} />);
}

export default FooterNavigation;
