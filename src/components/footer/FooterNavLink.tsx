import type { FooterLink } from "../../constants/footerItems.ts";

interface FooterNavLinkProps {
	link: FooterLink;
}

function FooterNavLink({ link }: FooterNavLinkProps) {
	return (
		<li className="footer-nav-item">
			<a
				style={{
					width: "100%",
					display: "inline-block",
				}}
				className="footer-nav-link link"
				href={`/${link.href}`}
			>
				{link.label}
			</a>
		</li>
	);
}

export default FooterNavLink;
