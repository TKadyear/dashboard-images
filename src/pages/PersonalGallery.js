import { DisplayImages } from "../components/Images";
import { sortAllMyPhotos, editDescription, sortActive, sortOptions, removePhoto, changeFlowOfSort, changeOptionForSort } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";
import { useState } from "react";
import { NoImages } from "./NoMatch";


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
			{
				listImages.length > 0
					? (<>
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
						<DisplayImages personalPhotos={true} itemData={listImages} onClickRemove={handleClickRemove} onSubmitEdit={handleSubmitEdit} />
					</>)
					: <NoImages text="Parece que aún no tienes ninguna foto añadida. Empieza a buscar en :" to="/search" value="Search" />
			}
		</>
	);
}
