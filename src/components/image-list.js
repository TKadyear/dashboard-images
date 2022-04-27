import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
// TODO Hacer que sea un componente más grande para reutilizar

export const GalleryImages = (props) => (
	<ImageList sx={{
		width: "75%",
		margin: "0 auto"
	}}>
		{props.itemData.map((item) => (
			<ImageListItem key={item.id}>
				<img
					src={`${item.urls.full}?w=248&fit=crop&auto=format`}
					alt={item.alt_description}
				/>
				<ImageListItemBar
					title={item.user.name}
					position="below"
				/>
				{props.searchPage && <Button variant="contained" onClick={() => props.onClick(item)}>Add to My Photos</Button>}
				{props.personalPhotos && (
					<div>
						<p>{item.description}</p>
						<a href={item.download} download>Download</a>
					</div>
				)}
			</ImageListItem>
		))}
	</ImageList>
);
