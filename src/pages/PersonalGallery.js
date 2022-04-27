import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";
import { FilterBar } from "../components/FilterBar";
import { InputSearch } from "../components/TextField";


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
