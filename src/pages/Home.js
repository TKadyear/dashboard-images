import { Typography, Box, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRandomPhoto } from "../services/unsplash-api";

const styleContainer = (theme) => ({
	display: "flex",
	flexDirection: "column-reverse",
	padding: "2rem",
	gap: "2rem",
	[theme.breakpoints.up("sm")]: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center"
	},
});
const styleImage = (bg) => (theme) => ({
	width: "80vw",
	height: "200px",
	background: `url(${bg}) no-repeat center`,
	backgroundSize: "cover",
	borderRadius: "12px",
	[theme.breakpoints.up("sm")]: {
		width: "40%",
		height: "60vh",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center"
	},
});

export const Home = () => {
	const [background, setBackground] = useState("");
	useEffect(() => {
		getRandomPhoto()
			.then(r => setBackground(r));
	}, []);
	return (
		<>
			<Container sx={styleContainer}>
				<Box sx={{ width: { xs: "100%", sm: "65%", md: "45%" } }} >
					<Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }, margin: "1rem auto" }}>
						All the assets you need, in one place
					</Typography>
					<Typography variant="h2" sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.75rem" }, margin: "1rem auto" }}>
						Find and download the best high-quality photos
					</Typography>
					<Button variant="contained" to="/dashboard-images/search" endIcon={<SearchIcon />} component={Link}>
						Search
					</Button>
				</Box>
				<Box sx={styleImage(background)} />
			</Container>
		</>
	);
};
