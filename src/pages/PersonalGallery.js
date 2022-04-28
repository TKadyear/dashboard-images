import { GalleryImages } from "../components/image-list";
import { selectAllMyPhotos } from "../features/my-photos/myPhotosSlice";
import { useSelector } from "react-redux";


export function Gallery() {
	const listImages = useSelector(selectAllMyPhotos);
	return (
		<>
			{listImages && <GalleryImages personalPhotos={true} itemData={listImages} />}
		</>
	);
}
