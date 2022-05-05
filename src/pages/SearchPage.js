import { useEffect, useState } from "react";
import { InputSearch } from "../components/TextField";
import { Spinner } from "../components/spinner";
import { DisplayImages } from "../components/Images";
import { useDebounce } from "../custom-hooks/useDebounce";
import { addPhoto } from "../features/my-photos/myPhotosSlice";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacters } from "../services/unsplash-api";
// import { useLocation } from "react-router-dom";
import { FilterBar } from "../components/FilterBar";
import { Typography } from "@mui/material";
import { addListPhoto, sortAllMyPhotos, sortActive, sortOptions, changeFlowOfSort, changeOptionForSort } from "../features/unsplash-photos/unsplashPhotosSlice";

// IMPROVE hacer un slice para gestionar mejor el state de estas fotos
export const sortPhotos = (photos, sort) => {
	const option = sort.optionActive;
	const sorted = [...photos].sort((a, b) => {
		return sort.isAscending ? a[option] + b[option] : a[option] - b[option];
	});
	return sorted;
};

export const Search = () => {
	const dispatch = useDispatch();
	const sortData = useSelector(sortActive);
	const allSortOptions = useSelector(sortOptions);
	const results = useSelector(sortAllMyPhotos);
	const handleClickAscending = () => dispatch(changeFlowOfSort());
	const handleChangeSort = (value) => dispatch(changeOptionForSort(value));
	// const location = useLocation();
	// console.log(location);


	const [searchTerm, setSearchTerm] = useState("");
	const [firstRequest, setFirstRequest] = useState(true);
	const [isSearching, setIsSearching] = useState(false);
	const handleClick = (item) => {
		const date = new Date();
		const itemToImport = { ...item, date_import: date.toISOString(), date_import_timestamp: date.getTime() };
		dispatch(addPhoto(itemToImport));
	};

	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const handleChange = (e) => setSearchTerm(e.target.value);
	// Effect for API call
	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true);
				searchCharacters(debouncedSearchTerm)
					.then((results) => {
						setIsSearching(false);
						dispatch(addListPhoto(results));
						setFirstRequest(false);
					});
			} else {
				dispatch(addListPhoto([]));
				setIsSearching(false);
			}
		},
		[debouncedSearchTerm]
	);
	return (
		<>
			<FilterBar
				optionsFilter={allSortOptions}
				sortOptions={sortData}
				onClick={handleClickAscending}
				onChange={handleChangeSort}>
				<InputSearch
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
				/>
			</FilterBar>
			{isSearching && <Spinner />}
			{results && <DisplayImages onClick={handleClick} itemData={results} />}
			{results.length === 0 && <Typography variant="h4" sx={{ textAlign: "center" }} >{firstRequest ? "Prueba a buscar algo " : "No hay resultados con esa búsqueda"}</Typography>}

		</>
	);
};
