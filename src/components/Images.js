import { Divider, Tooltip, Card, CardMedia, CardContent, IconButton, Typography, Badge } from "@mui/material";
import { useState } from "react";
import { EditText, RemoveModal } from "./ModalEditDescription";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { addPhoto } from "../features/my-photos/myPhotosSlice";
import { saveAs } from "file-saver";

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
const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));


const CardImages = (props) => {
	const item = props.item;
	return (
		<Card sx={{ maxWidth: 345, }}>
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
			{props.description && <CardContent sx={{
				height: "50px",
				overscrollBehaviorY: "contain",
				overflowY: "auto"
			}}>
				<Typography variant="body2" color="text.secondary">
					Description:
					{item.description || ""}
				</Typography>
			</CardContent>}
			<ActionsCard>
				<Tooltip title="Likes">
					<IconButton aria-label="likes"><StyledBadge badgeContent={item.likes} color="secondary"><FavoriteIcon /></StyledBadge></IconButton>
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
	const [open, setOpen] = useState(false);
	const [openModalRemove, setOpenModalRemove] = useState(false);
	const handleEdit = (id) => {
		setIsEditing(id);
		setOpen(true);
	};
	const handleRemove = (id) => {
		setIsEditing(id);
		setOpenModalRemove(true);
	};
	const handleClose = () => {
		setIsEditing("");
		setOpen(false);
		setOpenModalRemove(false);
	};
	const handleDownload = (url, id) => saveAs(url, `${id}.jpg`);

	const editButton = (id) => {
		let edit = (<Tooltip title="Edit Description">
			<IconButton onClick={() => handleEdit(id)} aria-label="edit">
				<EditIcon />
			</IconButton>
		</Tooltip>);
		if (isEditing === id && open) {
			edit = <EditText open={open} onClose={handleClose} id={id} />;
		}
		return edit;
	};

	const removeButton = (id) => {
		let remove = (<Tooltip title="Remove Image">
			<IconButton onClick={() => handleRemove(id)} aria-label="delete">
				<DeleteIcon />
			</IconButton>
		</Tooltip>);
		if (isEditing === id && openModalRemove) {
			remove = <RemoveModal open={openModalRemove} onClose={handleClose} id={id} />;
		}
		return remove;
	};
	const actions = (item) => {
		return props.personalPhotos
			? (<>
				{editButton(item.id)}
				{removeButton(item.id)}

				<Tooltip title="Download Image">
					<IconButton aria-label="download" onClick={() => handleDownload(item.urls.full, item.id)}>
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
