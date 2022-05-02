import { ImageList, ImageListItem, ImageListItemBar, Button } from "@mui/material";
import { useState } from "react";
import { EditText } from "./ModalEditDescription";
export const GalleryImages = (props) => {
	const [isEditing, setIsEditing] = useState("");
	const [open, setOpen] = useState("");
	const handleEdit = (id) => {
		setIsEditing(id);
		setOpen(true);
	};
	const handleClose = () => {
		setIsEditing("");
		setOpen(false);
	};
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
							{isEditing === item.id
								? <EditText open={open} onClose={handleClose} id={item.id} />
								: <button onClick={() => handleEdit(item.id)}>Edit</button>
							}
						</div>
					)}
				</ImageListItem>
			))}
		</ImageList>
	);
};
