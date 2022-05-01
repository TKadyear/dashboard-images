import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { InputSearch } from "../components/TextField";
import { Spinner } from "../components/spinner";
import { GalleryImages } from "../components/image-list";
import { useDebounce } from "../custom-hooks/useDebounce";
import { addPhoto } from "../features/my-photos/myPhotosSlice";
import { useDispatch } from "react-redux";
import { searchCharacters } from "../services/unsplash-api";
import { useLocation } from "react-router-dom";
export const Search = () => {
	const location = useLocation();
	console.log(location);
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
	//	https://api.unsplash.com/search/photos/?query=coffee&client_id=MIMdH3XPFMcOFvYg9cbiQ5iLuiLml2Fa14CGidU5ZXM
	// Effect for API call
	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true);
				searchCharacters(debouncedSearchTerm)
					.then((results) => {
						setIsSearching(false);
						setResults(results);
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
			<Container sx={{
				paddingTop: "3.5rem"
			}}>
				<InputSearch
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
				/>
				{isSearching && <Spinner sx={{ margin: "0 auto", }} />}
				{results && <GalleryImages searchPage={true} onClick={handleClick} itemData={results} />}
			</Container>
		</>
	);
};
