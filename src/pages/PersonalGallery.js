import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";
import { FilterBar } from "../components/FilterBar";


export function Gallery() {
	const [listInitialImages, setListInitialImages] = useState([]);
	const [listImages, setListImages] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("imported_photos"));
		setListImages(data);
		setListInitialImages(data);
		console.log(listInitialImages);
	}, []);

	return (
		<>
			<FilterBar></FilterBar>
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} />}
		</>
	);
}
