import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";

export function Gallery() {
	const [listImages, setListImages] = useState([]);
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("imported_photos"));
		setListImages(data);
	}, []);
	return (
		<>
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} />}
		</>
	);
}
