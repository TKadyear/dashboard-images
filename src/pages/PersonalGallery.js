import { DisplayImages } from "../components/Images";
import { sortAllMyPhotos, editDescription } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../components/TextField";
import { FilterBar } from "../components/FilterBar";
import { useState, useEffect } from "react";
import { NoImages } from "./NoMatch";
import { addMoreOptions, resetOptions } from "../features/sort/sortSlice";

export function Gallery() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const listImages = useSelector(sortAllMyPhotos(search));
	const handleChange = (e) => setSearch(e.target.value);
	const handleSubmitEdit = (value, id) => {
		const payload = { description: value, id: id };
		dispatch(editDescription(payload));
	};
	useEffect(() => {
		dispatch(addMoreOptions({ key: "Date Imported", value: "date_import_timestamp" }));
		return (() => {
			dispatch(resetOptions());
		});
	}, []);
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
						<DisplayImages personalPhotos={true} itemData={listImages} onSubmitEdit={handleSubmitEdit} />
					</>)
					: <NoImages text="It seems like you don't have any photo yet." to="/dashboard-images/search" value="Search photos" />
			}
		</>
	);
}
