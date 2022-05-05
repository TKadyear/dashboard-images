import { useEffect, useState } from "react";
import { InputSearch } from "../components/TextField";
import { Spinner } from "../components/spinner";
import { DisplayImages } from "../components/Images";
import { useDebounce } from "../custom-hooks/useDebounce";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacters } from "../services/unsplash-api";
import { FilterBar } from "../components/FilterBar";
import { addListPhoto, unsplashPhotos } from "../features/unsplash-photos/unsplashPhotosSlice";
import { NoResults } from "../components/NoResults";

export const Search = () => {
	const dispatch = useDispatch();
	const listImages = useSelector(unsplashPhotos);

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
			{listImages.length === 0
				? <NoResults
					textContent={firstRequest ? "Try to search." : `We're sorry. We were not able to find a match for "${searchTerm}".`}
					subtitle={firstRequest || "Try Another Search?"} />
				: <DisplayImages itemData={listImages} />}

		</>
	);
};
