import { GalleryImages } from "../components/image-list";
import { sortAllMyPhotos, searchTerm, editDescription, filterByDescriptionAllMyPhotos, sortActive, addSearchTerm, sortOptions, removePhoto, changeFlowOfSort, changeOptionForSort } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";


export function Gallery() {
	const dispatch = useDispatch();
	const sortData = useSelector(sortActive);
	const allSortOptions = useSelector(sortOptions);
	const listImages = useSelector(sortAllMyPhotos);
	const search = useSelector(searchTerm);
	const filteredBySearch = useSelector(filterByDescriptionAllMyPhotos);
	const handleChange = (e) => dispatch(addSearchTerm(e.target.value));
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
					value={search}
					onChange={handleChange}
				/>
			</FilterBar>
			{listImages && <GalleryImages personalPhotos={true} itemData={search != "" ? filteredBySearch : listImages} onClickRemove={handleClickRemove} onSubmitEdit={handleSubmitEdit} />}
		</>
	);
}
