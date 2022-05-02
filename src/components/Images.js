import { Divider, Tooltip, Link, ImageList, ImageListItem, ImageListItemBar, Button, Card, CardMedia, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { EditText } from "./ModalEditDescription";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
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

const GridImages = styled.div`
	width: 90%;
	margin: 0 auto;
	display:grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
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
			{item.date_import && <Typography sx={{ padding: "0.5rem" }} variant="body2" color="text.secondary">
				{item.date_import}
			</Typography>}
			<Divider />
			<Typography sx={{ padding: "0.5rem" }} variant="body2" color="text.secondary">
				{item.width + "x" + item.height}
			</Typography>
			<Divider />
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Description:
					{item.description || ""}
				</Typography>
			</CardContent>
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
	return (
		<GridImages>
			{props.itemData.map((item) => <CardImages key={item.id} item={item}>
				{editButton(item.id)}
				<Tooltip title="Remove Image">
					<IconButton onClick={() => props.onClickRemove(item)} aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Download Image">
					<Link rel="noopener noreferrer" target="_blank" href={item.download} download>
						<IconButton aria-label="download">
							<DownloadIcon />
						</IconButton>
					</Link>
				</Tooltip>

			</CardImages>)}
		</GridImages>
	);
};
