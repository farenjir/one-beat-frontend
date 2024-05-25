export const transformerEnumData = (enumData = [], useNameAsId = false) => {
	const options = enumData.map(({ code, title }) => ({
		code,
		id: useNameAsId ? title : code,
		value: useNameAsId ? title : code,
		title,
		label: title,
		name: title,
		text: title,
	}));
	// return
	return options;
};
