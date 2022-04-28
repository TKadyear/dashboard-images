import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
// TODO Hacer que sea un componente más grande para reutilizar

export const GalleryImages = (props) => (
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
					</div>
				)}
			</ImageListItem>
		))}
	</ImageList>
);
