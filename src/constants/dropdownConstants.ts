import type { MenuProps } from "antd";

const languageOptions: MenuProps["items"] = [
	{
		key: "1",
		label: "English",
	},
	{
		key: "2",
		label: "Gujarati",
	},
];

const categoryOptions: MenuProps["items"] = [
	{
		key: "1",
		label: "Electronics",
	},
	{
		key: "2",
		label: "Cloths",
	},
	{
		key: "3",
		label: "Furniture",
	},
	{
		key: "4",
		label: "Shoes",
	},
	{
		key: "5",
		label: "Watches",
	},
	{
		key: "6",
		label: "Headphones",
	},
];

export { categoryOptions, languageOptions };
