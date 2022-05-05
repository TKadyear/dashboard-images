import { DisplayImages } from "../components/Images";
import { sortAllMyPhotos, editDescription, removePhoto } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";
import { useState, useEffect } from "react";
import { NoImages } from "./NoMatch";
import { addMoreOptions } from "../features/sort/sortSlice";

export function Gallery() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const listImages = useSelector(sortAllMyPhotos(search));
	const handleChange = (e) => setSearch(e.target.value);
	const handleClickRemove = (value) => dispatch(removePhoto(value));
	const handleSubmitEdit = (value, id) => {
		const payload = { description: value, id: id };
		dispatch(editDescription(payload));
	};
	useEffect(() => {
		//BUG Cuando vuelvo a la página search estas opciones persisten
		dispatch(addMoreOptions({ key: "Date Imported", value: "date_import_timestamp" }));
	}, []);
	// TODO Diferenciar a cuando no hay ninguna imagen en el store, se podría mirar con el selector
	return (
		<>
			{
				listImages.length > 0
					? (<>
						<FilterBar>
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
