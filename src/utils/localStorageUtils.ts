function getLocalStorageData<T>(key: string, defaultValue = "") {
	const data = localStorage.getItem(key) ?? defaultValue;

	return JSON.parse(data) as T;
}

function setLocalStorageData(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalStorageData, setLocalStorageData };
