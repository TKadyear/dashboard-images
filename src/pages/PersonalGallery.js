import { GalleryImages } from "../components/image-list";
import { sortAllMyPhotos, searchTerm, editDescription, sortActive, sortOptions, removePhoto, changeFlowOfSort, changeOptionForSort } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";
import { useState } from "react";

export function Gallery() {
	const dispatch = useDispatch();
	const sortData = useSelector(sortActive);
	const allSortOptions = useSelector(sortOptions);
	const [search, setSearch] = useState("");
	const listImages = useSelector(sortAllMyPhotos(search));
	const handleChange = (e) => setSearch(e.target.value);
	const handleClickRemove = (value) => dispatch(removePhoto(value));
	const handleSubmitEdit = (value, id) => {
		const payload = { description: value, id: id };
		dispatch(editDescription(payload));
	};
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
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} onClickRemove={handleClickRemove} onSubmitEdit={handleSubmitEdit} />}
		</>
	);
}
