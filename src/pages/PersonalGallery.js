import { GalleryImages } from "../components/image-list";
import { sortAllMyPhotos } from "../features/my-photos/myPhotosSlice";
import { useSelector } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";
import { useState } from "react";


export function Gallery() {
	const optionsForSort = {
		"Date Imported": "date_import",
		"Width": "width",
		"Height": "height",
		"Likes": "likes",
	};
	const [sortData, setSortData] = useState({
		optionActive: optionsForSort["Date Imported"],
		isAscending: false
	});
	const listImages = useSelector(sortAllMyPhotos(sortData));
	const handleClick = () => setSortData(prev => { return { ...prev, "isAscending": !prev.isAscending }; });
	const handleSelectedFilter = (value) => {
		setSortData(prev => { return { ...prev, optionActive: value }; });
	};

	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (e) => setSearchTerm(e.target.value);


	return (
		<>
			<FilterBar
				sortOptions={sortData}
				onClick={handleClick}
				optionsFilter={optionsForSort}
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
