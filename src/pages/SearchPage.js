import { useEffect, useState } from "react";
import { InputSearch } from "../components/TextField";
import { Spinner } from "../components/spinner";
import { DisplayImages } from "../components/Images";
import { useDebounce } from "../custom-hooks/useDebounce";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacters } from "../services/unsplash-api";
// import { useLocation } from "react-router-dom";
import { FilterBar } from "../components/FilterBar";
import { Typography } from "@mui/material";
import { addListPhoto, unsplashPhotos } from "../features/unsplash-photos/unsplashPhotosSlice";

export const Search = () => {
	const dispatch = useDispatch();
	const listImages = useSelector(unsplashPhotos);
	// const location = useLocation();
	// console.log(location);

	const [searchTerm, setSearchTerm] = useState("");
	const [firstRequest, setFirstRequest] = useState(true);
	const [isSearching, setIsSearching] = useState(false);


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
			<FilterBar>
				<InputSearch
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
				/>
			</FilterBar>
			{isSearching && <Spinner />}
			{listImages && <DisplayImages itemData={listImages} />}
			{listImages.length === 0 && <Typography variant="h4" sx={{ textAlign: "center" }} >{firstRequest ? "Prueba a buscar algo " : "No hay resultados con esa búsqueda"}</Typography>}

		</>
	);
};
