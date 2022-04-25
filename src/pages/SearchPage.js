import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Spinner } from "../components/spinner";
import { conversionDataApi } from "../components/conversion-data-from-api";
import TitlebarBelowImageList from "../components/image-list";
export const Search = () => {
	// https://usehooks.com/useDebounce/
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const handleChange = (e) => setSearchTerm(e.target.value);
	//	https://api.unsplash.com/search/photos/?query=coffee&client_id=MIMdH3XPFMcOFvYg9cbiQ5iLuiLml2Fa14CGidU5ZXM
	// Effect for API call
	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true);
				searchCharacters(debouncedSearchTerm).then((results) => {
					setIsSearching(false);
					setResults(results);
				});
			} else {
				setResults([]);
				setIsSearching(false);
			}
		},
		[debouncedSearchTerm] // Only call effect if debounced search term changes
	);
	return (
		<>
			<Container sx={{
				paddingTop: "3.5rem"
			}}>
				<TextField
					id="search"
					label="Search..."
					value={searchTerm}
					onChange={handleChange}
					sx={{
						maxWidth: 900,
						width: "90%"
					}}
				/>
			</Container>
			{isSearching && <Spinner />}
			{results && <TitlebarBelowImageList itemData={results} />}
		</>
	);
};

function searchCharacters(search) {
	const API_KEY = "MIMdH3XPFMcOFvYg9cbiQ5iLuiLml2Fa14CGidU5ZXM";
	// TODO Serían valores que se podrían modificar y se podrían pasar por parámetros
	const CANTIDAD_POR_PAGINA = 25;
	const PAGE = 1;
	return fetch(`https://api.unsplash.com/search/photos/?query=${search}&page=${PAGE}&per_page=${CANTIDAD_POR_PAGINA}&client_id=${API_KEY}`,
		{
			method: "GET",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			console.table(response.results);
			const resultApi = response.results.map(item => conversionDataApi(item));
			console.table(resultApi);
			return response.results;
		})
		.catch((error) => {
			console.error(error);
			return [];
		});
}


// Custom Hook
function useDebounce(value, delay) {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler);
			};
		},
		[value, delay] // Only re-call effect if value or delay changes
	);
	return debouncedValue;
}
