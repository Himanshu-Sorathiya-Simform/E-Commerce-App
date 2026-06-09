import { PlusOutlined } from "@ant-design/icons";
import { languageOptions } from "../../constants/dropdownConstants.ts";
import Dropdown from "../dropdown/Dropdown.tsx";

function HeaderSecondary() {
	return (
		<div
			style={{
				backgroundColor: "var(--color-primary)",
			}}
			className="w-full"
		>
			<div className="flex mx-auto max-w-6xl justify-between text-white px-4 py-2 gap-2">
				<p className="text-sm">
					<PlusOutlined className="h-5 w-5" />

					<span>91 6355573856</span>
				</p>

				<span>Get 50% discount on every item ...</span>

				<Dropdown
					items={languageOptions ?? []}
					initialSelected="1"
					defaultLabel="Select Language"
				/>
			</div>
		</div>
	);
}

export default HeaderSecondary;
