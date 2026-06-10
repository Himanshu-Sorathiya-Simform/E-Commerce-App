import type { FooterLink } from "../../constants/footerData.ts";

interface FooterNavLinkProps {
	link: FooterLink;
}

function FooterNavLink({ link }: FooterNavLinkProps) {
	return (
		<li className="hover:translate-x-2 transition-all">
			<a
				className="w-full inline-block hover:text-shadow-md link"
				href={`/${link.href}`}
			>
				{link.label}
			</a>
		</li>
	);
}

export default FooterNavLink;
