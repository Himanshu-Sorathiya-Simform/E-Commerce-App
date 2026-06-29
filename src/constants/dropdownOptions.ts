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

const genderOptions = [
	{ value: "male", label: "Male" },
	{ value: "female", label: "Female" },
	{ value: "other", label: "Other" },
	{ value: "prefer_not_to_say", label: "Prefer not to say" },
];

export { genderOptions, languageOptions };
