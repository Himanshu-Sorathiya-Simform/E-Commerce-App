import { ShoppingCartOutlined } from "@ant-design/icons";
import { Flex, Layout } from "antd";

const { Footer: FooterAntD } = Layout;

function Footer() {
	return (
		<FooterAntD>
			<div className="max-w-6xl mx-auto">
				<Flex
					gap="medium"
					justify="space-between"
				>
					<div className="max-w-md">
						<div>
							<ShoppingCartOutlined />
						</div>

						<p className="text-sm text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Porro autem et delectus? Illo nam vel mollitia, quaerat
							repellendus qui nesciunt ullam! Cupiditate ipsum,
							possimus provident, ut officia itaque beatae ad odit,
							alias inventore reprehenderit. Quo vitae recusandae nihil
							autem necessitatibus repellat minima saepe beatae illum.
							Dolorum eum laborum sint quas.
						</p>
					</div>

					<Flex
						vertical
						gap="medium"
					>
						<p className="font-semibold text-lg">Department</p>

						<ul className="flex flex-col gap-1 text-sm text-gray-600">
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/fashion"
								>
									Fashion
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/education-product"
								>
									Education Product
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/frozen-food"
								>
									Frozen Food
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/beverages"
								>
									Beverages
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/organic-grocery"
								>
									Organic Grocery
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/office-supplies"
								>
									Office Supplies
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/beauty-products"
								>
									Beauty Products
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/books"
								>
									Books
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/electronics-gadget"
								>
									Electronics & Gadget
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/travel-accessories"
								>
									Travel Accessories
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/fitness"
								>
									Fitness
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/sneakers"
								>
									Sneakers
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/toys"
								>
									Toys
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/furniture"
								>
									Furniture
								</a>
							</li>
						</ul>
					</Flex>

					<Flex
						vertical
						gap="medium"
					>
						<p className="font-semibold text-lg">About Us</p>

						<ul className="flex flex-col gap-1 text-sm text-gray-600">
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/about-shopcart"
								>
									About shopcart
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/careers"
								>
									Careers
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/news-blog"
								>
									News & Blog
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/help"
								>
									Help
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/press-center"
								>
									Press Center
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/shop-by-location"
								>
									Shop by location
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/shopcart-brands"
								>
									Shopcart brands
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/affiliate-partners"
								>
									Affiliate & Partners
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/ideas-guides"
								>
									Ideas & Guides
								</a>
							</li>
						</ul>
					</Flex>

					<Flex
						vertical
						gap="medium"
					>
						<p className="font-semibold text-lg">Services</p>

						<ul className="flex flex-col gap-1 text-sm ">
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/gift-card"
								>
									Gift Card
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/mobile-app"
								>
									Mobile App
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/shipping-delivery"
								>
									Shipping & Delivery
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/order-pickup"
								>
									Order Pickup
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/account-signup"
								>
									Account Signup
								</a>
							</li>
						</ul>
					</Flex>

					<Flex
						vertical
						gap="medium"
					>
						<p className="font-semibold text-lg">Help</p>

						<ul className="flex flex-col gap-2 text-sm text-gray-700">
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/shopcart-help"
								>
									Shopcart Help
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/returns"
								>
									Returns
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/track-orders"
								>
									track orders
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/contact-us"
								>
									contact us
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/feedback"
								>
									feedback
								</a>
							</li>
							<li className="hover:translate-x-2 transition-all">
								<a
									className="w-full inline-block hover:text-shadow-md link"
									href="/security-fraud"
								>
									Security & Fraud
								</a>
							</li>
						</ul>
					</Flex>
				</Flex>
			</div>
		</FooterAntD>
	);
}

export default Footer;
