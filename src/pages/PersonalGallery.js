import { useState, useEffect } from "react";
import { GalleryImages } from "../components/image-list";

export function Gallery() {
	const [listImages, setListImages] = useState(null);
	useEffect(() => {
		// IMPROVE to https://api.unsplash.com/photos/?client_id={process.env.REACT_APP_CLIENT_ID}
		fetch("./mocks/list-images-gallery.json")
			.then(response => response.json())
			.then(data => {
				setListImages(data);
			});
	}, []);
	return (
		<>
			{listImages && <GalleryImages itemData={listImages} />}
		</>
	);
}
