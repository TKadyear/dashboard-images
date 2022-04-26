import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";


export function Gallery() {
	const [listInitialImages, setListInitialImages] = useState([]);
	const [listImages, setListImages] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => setSearchTerm(e.target.value);
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("imported_photos"));
		setListImages(data);
		setListInitialImages(data);
		console.log(listInitialImages);
	}, []);
	useEffect(() => {
		if (searchTerm === "") {
			console.log("bu");
			setListImages(listInitialImages);
		} else {
			console.log("ba");
			setListImages(listInitialImages.filter(image => image.description.includes(searchTerm)));
		}
	}, [searchTerm]);
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
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} />}
		</>
	);
}
