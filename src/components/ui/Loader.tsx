function Loader() {
	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				height: "3.5rem",
				width: "3.5rem",
				borderRadius: "50%",
				border: "4px solid #d1d5db",
				borderTopColor: "var(--color-primary)",
				animation: "spin 1s linear infinite",
			}}
		/>
	);
}

export default Loader;
