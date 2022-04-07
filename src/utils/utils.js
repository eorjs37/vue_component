const imageType = ['jpg', 'png', 'jpeg'];
const extract = (fileType, file) => {
	if (fileType === 'IMAGE') {
		const filetype = file.type.split('/');
		if (imageType.includes(filetype[1])) {
			return true;
		}
	}

	return false;
};

export { extract };
