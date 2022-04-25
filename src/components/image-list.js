import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowImageList(props) {
	return (
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
				</ImageListItem>
			))}
		</ImageList>
	);
}
