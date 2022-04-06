const imageType = ['jpg', 'png', 'gif', 'svg'];

const extension = (fileType, file) => {
	if (fileType === 'IMAGE') {
		const type = file['type'].split('/');
		if (imageType.includes(type[1])) {
			return true;
		}
	}

	return false;
};

export { extension };
