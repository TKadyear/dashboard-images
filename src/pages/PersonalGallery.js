import { GalleryImages } from "../components/image-list";
import { sortAllMyPhotos, sortActive, sortOptions, removePhoto, changeFlowOfSort, changeOptionForSort } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";
import { useState } from "react";


export function Gallery() {
	const dispatch = useDispatch();
	const sortData = useSelector(sortActive);
	const allSortOptions = useSelector(sortOptions);
	const listImages = useSelector(sortAllMyPhotos);
	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (e) => setSearchTerm(e.target.value);
	const handleClickRemove = (value) => dispatch(removePhoto(value));
	return (
		<>
			<FilterBar
				sortOptions={sortData}
				onClick={() => dispatch(changeFlowOfSort())}
				optionsFilter={allSortOptions}
				onChange={(value) => dispatch(changeOptionForSort(value))}
			>
				<InputSearch
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
				/>
			</FilterBar>
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} onClickRemove={handleClickRemove} />}
		</>
	);
}
