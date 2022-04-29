import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editDescription, findPhoto } from "../features/my-photos/myPhotosSlice";

// TODO Hacer que sea un componente más grande para reutilizar
const EditText = (props) => {
	const photo = useSelector(findPhoto(props.id));
	const dispatch = useDispatch();
	const handleEdit = () => {
		props.finishEdit();
		const payload = { description: editTerm, id: props.id };
		dispatch(editDescription(payload));
	};
	const [editTerm, setEditTerm] = useState("");
	const handleChange = (e) => setEditTerm(e.target.value);
	useEffect(() => setEditTerm(photo.description || ""), []);

	return (
		<>
			<input type="text" value={editTerm} onChange={handleChange} />
			<button onClick={handleEdit}>Guardar</button>
		</>
	);
};
// TODO una comprobación de cual es el id esta activo para que solo se active para editar ahi.
// TODO el dispatch al
export const GalleryImages = (props) => {
	const [isEditing, setIsEditing] = useState("");
	return (
		<ImageList cols={4} gap={1} sx={{
			width: "75%",
			margin: "0 auto"
		}}>
			{props.itemData.map((item) => (
				<ImageListItem key={item.id}>
					<img
						style={{ width: 250 }}
						src={`${item.urls.full}`}
						alt={item.alt_description}
					/>
					<ImageListItemBar
						title={item.user.name}
						position="below"
					>
					</ImageListItemBar>
					{props.searchPage && <Button variant="contained" onClick={() => props.onClick(item)}>Add to My Photos</Button>}
					{props.personalPhotos && (
						<div>
							<p>{item.description}</p>
							<a href={item.download} download>Download</a>
							<button onClick={() => props.onClickRemove(item)}>Remove</button>
							{isEditing === item.id ? <EditText valueToChange={item.description} onSubmit={() => props.submitEdit()} finishEdit={() => setIsEditing("")} id={item.id} /> : <button onClick={() => setIsEditing(item.id)}>Edit</button>}
						</div>
					)}
				</ImageListItem>
			))}
		</ImageList>
	);
};
