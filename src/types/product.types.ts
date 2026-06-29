// --- Core Reusable Sub-Interfaces ---
interface Dimensions {
	width: number;
	height: number;
	depth: number;
}

interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}

interface ProductMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}

interface BaseProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	thumbnail: string;
	images: string[];
}

interface DetailedProduct extends BaseProduct {
	sku: string;
	weight: number;
	dimensions: Dimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock" | string;
	reviews: Review[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: ProductMeta;
}

export type { BaseProduct, DetailedProduct, Dimensions, ProductMeta, Review };
