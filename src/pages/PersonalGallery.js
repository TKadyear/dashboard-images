import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";
import { FilterBar } from "../components/FilterBar";
import { InputSearch } from "../components/TextField";

const sortList = (list, valueForOrder, isAscending) => {
	console.log(list);
	return isAscending
		? list.sort((a, b) => a[valueForOrder] + b[valueForOrder])
		: list.sort((a, b) => a[valueForOrder] - b[valueForOrder]);
};

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
	const handleSelectedFilter = (value) => {
		setFilterActive(value);
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("imported_photos"));
		setListImages(data);
		setListInitialImages(data);
	}, []);
	useEffect(() => {
		if (listImages.length > 0) {
			console.log(listImages);
			setListImages(sortList(listInitialImages, filterActive, isAscending));
		}
	}, [filterActive, isAscending]);
	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (e) => setSearchTerm(e.target.value);


	return (
		<>
			<FilterBar
				isAscending={isAscending}
				onClick={handleClick}
				optionsFilter={optionsForFilter}
				optionActive={filterActive}
				onChange={handleSelectedFilter}
			>
				<InputSearch
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
				/>
			</FilterBar>
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} />}
		</>
	);
}
