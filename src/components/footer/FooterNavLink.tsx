import type { FooterLink } from "../../constants/footerItems.ts";

interface FooterNavLinkProps {
	link: FooterLink;
}

function FooterNavLink({ link }: FooterNavLinkProps) {
	return (
		<li className="footer-nav-item">
			<a
				className="footer-nav-link link"
				href={`/${link.href}`}
			>
				{link.label}
			</a>
		</li>
	);
}

export default FooterNavLink;
