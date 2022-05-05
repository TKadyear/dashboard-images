import { Divider, Tooltip, Button, Card, CardMedia, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { EditText } from "./ModalEditDescription";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { addPhoto } from "../features/my-photos/myPhotosSlice";

const GridImages = styled.div`
	width: 90%;
	margin: 2rem auto;
	display:grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2rem;
`;
const ActionsCard = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

const CardImages = (props) => {
	const item = props.item;
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ objectFit: "cover", position: "relative" }}
				component="img"
				height="194"
				image={item.urls.thumb}
				alt={item.alt_description}
			/>
			<Typography sx={{ padding: "0.5rem" }} variant="body2" color="text.secondary">
				{item.date_import || item.created_at}
			</Typography>
			<Divider />
			<Typography sx={{ padding: "0.5rem" }} variant="body2" color="text.secondary">
				{item.width + "x" + item.height}
			</Typography>
			<Divider />
			{props.description && <CardContent>
				<Typography variant="body2" color="text.secondary">
					Description:
					{item.description || ""}
				</Typography>
			</CardContent>}
			<ActionsCard>
				<Tooltip title="Likes">
					<Button endIcon={<FavoriteIcon />} >{item.likes}</Button>
				</Tooltip>
				<div>
					{props.children}
				</div>
			</ActionsCard>

		</Card>
	);
};
export const DisplayImages = (props) => {
	const dispatch = useDispatch();
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

	const editButton = (id) => {
		let edit = (<Tooltip title="Edit Description">
			<IconButton onClick={() => handleEdit(id)} aria-label="edit">
				<EditIcon />
			</IconButton>
		</Tooltip>);
		if (isEditing === id) {
			edit = <EditText open={open} onClose={handleClose} id={id} />;
		}
		return edit;
	};
	const actions = (item) => {
		return props.personalPhotos
			? (<>
				{editButton(item.id)}
				<Tooltip title="Remove Image">
					<IconButton onClick={() => props.onClickRemove(item)} aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Download Image">
					<IconButton aria-label="download" onClick={() => props.onDownload(item.urls.full)}>
						<DownloadIcon />
					</IconButton>
				</Tooltip>
			</>)
			: (
				<Tooltip title="Add to my photos">
					<IconButton onClick={() => dispatch(addPhoto(item))} aria-label="Add to My Photos">
						<AddCircleOutlineIcon />
					</IconButton>
				</Tooltip>
			);
	};
	return (
		<GridImages>
			{props.itemData.map((item) => <CardImages description={props.personalPhotos} key={item.id} item={item}>
				{actions(item)}
			</CardImages>)}
		</GridImages>
	);
};
