function HeaderPrimary() {
	return (
		<div
			style={{
				backgroundColor: "var(--color-secondary)",
			}}
		>
			<div className="flex mx-auto max-w-4xl justify-between p-4 gap-2">
				<span>Logo</span>

				<span>Links</span>

				<span>Search</span>

				<span>Account</span>

				<span>Cart</span>
			</div>
		</div>
	);
}

export default HeaderPrimary;
