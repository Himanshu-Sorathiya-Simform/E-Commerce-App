interface FooterLink {
	label: string;
	href: string;
}

interface FooterItem {
	title: string;
	links: FooterLink[];
}

const footerData: FooterItem[] = [
	{
		title: "Department",
		links: [
			{ label: "Fashion", href: "/fashion" },
			{ label: "Education Product", href: "/education-product" },
			{ label: "Frozen Food", href: "/frozen-food" },
			{ label: "Beverages", href: "/beverages" },
			{ label: "Organic Grocery", href: "/organic-grocery" },
			{ label: "Office Supplies", href: "/office-supplies" },
			{ label: "Beauty Products", href: "/beauty-products" },
			{ label: "Books", href: "/books" },
			{ label: "Electronics & Gadget", href: "/electronics-gadget" },
			{ label: "Travel Accessories", href: "/travel-accessories" },
			{ label: "Fitness", href: "/fitness" },
			{ label: "Sneakers", href: "/sneakers" },
			{ label: "Toys", href: "/toys" },
			{ label: "Furniture", href: "/furniture" },
		],
	},
	{
		title: "About Us",
		links: [
			{ label: "About shopcart", href: "/about-shopcart" },
			{ label: "Careers", href: "/careers" },
			{ label: "News & Blog", href: "/news-blog" },
			{ label: "Help", href: "/help" },
			{ label: "Press Center", href: "/press-center" },
			{ label: "Shop by location", href: "/shop-by-location" },
			{ label: "Shopcart brands", href: "/shopcart-brands" },
			{ label: "Affiliate & Partners", href: "/affiliate-partners" },
			{ label: "Ideas & Guides", href: "/ideas-guides" },
		],
	},
	{
		title: "Services",
		links: [
			{ label: "Gift Card", href: "/gift-card" },
			{ label: "Mobile App", href: "/mobile-app" },
			{ label: "Shipping & Delivery", href: "/shipping-delivery" },
			{ label: "Order Pickup", href: "/order-pickup" },
			{ label: "Account Signup", href: "/account-signup" },
		],
	},
	{
		title: "Help",
		links: [
			{ label: "Shopcart Help", href: "/shopcart-help" },
			{ label: "Returns", href: "/returns" },
			{ label: "track orders", href: "/track-orders" },
			{ label: "contact us", href: "/contact-us" },
			{ label: "feedback", href: "/feedback" },
			{ label: "Security & Fraud", href: "/security-fraud" },
		],
	},
];

export { type FooterItem, type FooterLink, footerData };
