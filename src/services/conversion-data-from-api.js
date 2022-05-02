export const conversionDataApi = (data) => {
	let newFormat = {};
	const requireData = ["id", "created_at", "width", "height", "description", "alt_description", "urls", "links", "user", "categories", "likes"];
	requireData.forEach(itemRequired => {
		switch (itemRequired) {
			case "urls": {
				newFormat[itemRequired] = {
					full: data[itemRequired].full,
					thumb: data[itemRequired].thumb,
				};
				break;
			}
			case "links": {
				newFormat.download = data[itemRequired].download;
				break;
			}
			case "user": {
				newFormat[itemRequired] = {};
				const userItems = ["username", "name", "first_name", "links"];
				userItems.forEach(item => newFormat[itemRequired][item] = data[itemRequired][item]);
				break;
			}
			default:
				newFormat[itemRequired] = data[itemRequired];
		}
	});
	return newFormat;
};
