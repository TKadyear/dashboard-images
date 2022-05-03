import { useEffect, useState } from "react";
import { InputSearch } from "../components/TextField";
import { Spinner } from "../components/spinner";
import { DisplayImages } from "../components/Images";
import { useDebounce } from "../custom-hooks/useDebounce";
import { addPhoto } from "../features/my-photos/myPhotosSlice";
import { useDispatch } from "react-redux";
import { searchCharacters } from "../services/unsplash-api";
// import { useLocation } from "react-router-dom";
import { FilterBar } from "../components/FilterBar";

// IMPROVE hacer un slice para gestionar mejor el state de estas fotos
export const sortPhotos = (photos, sort) => {
	const option = sort.optionActive;
	const sorted = [...photos].sort((a, b) => {
		return sort.isAscending ? a[option] + b[option] : a[option] - b[option];
	});
	return sorted;
};

export const Search = () => {
	const optionsForSort = {
		"Width": "width",
		"Height": "height",
		"Likes": "likes",
	};
	const [sort, setSort] = useState({
		optionActive: "width",
		allOptionsAvailable: optionsForSort,
		isAscending: false
	});
	// BUG No funciona el botón para cambiar el orden.
	const handleClickAscending = () => setSort(prev => { return { ...prev, isAscending: !prev.isAscending }; });
	const handleChangeSort = (value) => setSort(prev => { return { ...prev, optionActive: value }; });
	// const location = useLocation();
	// console.log(location);
	// https://usehooks.com/useDebounce/
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const dispatch = useDispatch();
	const handleClick = (item) => {
		const date = new Date();
		const itemToImport = { ...item, date_import: date.toISOString(), date_import_timestamp: date.getTime() };
		dispatch(addPhoto(itemToImport));
	};

	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const handleChange = (e) => setSearchTerm(e.target.value);
	useEffect(() => {
		return () => setResults(prev => sortPhotos(prev, sort));
	}, [sort]);
	//	https://api.unsplash.com/search/photos/?query=coffee&client_id=MIMdH3XPFMcOFvYg9cbiQ5iLuiLml2Fa14CGidU5ZXM
	// Effect for API call
	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true);
				searchCharacters(debouncedSearchTerm)
					.then((results) => {
						setIsSearching(false);
						setResults(sortPhotos(results, sort));
					});
			} else {
				setResults([]);
				setIsSearching(false);
			}
		},
		[debouncedSearchTerm]
	);
	return (
		<>
			<FilterBar optionsFilter={optionsForSort} sortOptions={sort} onClick={handleClickAscending} onChange={handleChangeSort}>
				<InputSearch
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
				/>
			</FilterBar>
			{isSearching && <Spinner sx={{ margin: "0 auto", }} />}
			{results && <DisplayImages onClick={handleClick} itemData={results} />}

		</>
	);
};
