import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";
import { FilterBar } from "../components/FilterBar";


export function Gallery() {
	const [listInitialImages, setListInitialImages] = useState([]);
	const [listImages, setListImages] = useState([]);
	const [isAscending, setIsAscending] = useState(false);
	const optionsForFilter = {
		"Date Imported": "date_import",
		"Width": "width",
		"Height": "height",
		"Likes": "likes",
	};
	const [filterActive, setFilterActive] = useState(optionsForFilter["Date Imported"]);
	const handleClick = () => setIsAscending(prev => !prev);
	const handleSelectedFilter = (value) => setFilterActive(value);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("imported_photos"));
		setListImages(data);
		setListInitialImages(data);
		console.log(listInitialImages);
	}, []);

	return (
		<>
			<FilterBar
				isAscending={isAscending}
				onClick={handleClick}
				optionsFilter={optionsForFilter}
				optionActive={filterActive}
				onChange={handleSelectedFilter}
			/>
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} />}
		</>
	);
}
