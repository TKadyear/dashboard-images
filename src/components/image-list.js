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
					alt={item.description}
					loading="lazy"
				/>
				<ImageListItemBar
					title={item.user.name}
					position="below"
				/>
				{props.searchPage && <Button variant="contained" onClick={props.onClick}>Add to My Photos</Button>}
			</ImageListItem>
		))}
	</ImageList>
);
