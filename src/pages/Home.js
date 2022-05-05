import { Typography, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRandomPhoto } from "../services/unsplash-api";

const Container = styled.div`/*css*/
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	/* text-align: center; */
	gap: 2rem;
	padding: 2rem;
	`;
const Image = styled.div`/*css*/
	width: 40%;
	height: 60vh;
	background: url(${props => props.bg}) no-repeat center;
	background-size: cover;
	border-radius: 25% 25% 0 0;
`;

export const Home = () => {
	const [background, setBackground] = useState("");
	useEffect(() => {
		getRandomPhoto()
			.then(r => setBackground(r));
	}, []);
	return (
		<>
			<Container>
				<Box sx={{ width: "45%" }}>
					<Typography variant="h1" sx={{ fontSize: "4rem" }}>
						All the assets you need, in one place
					</Typography>
					<Typography variant="h1" sx={{ fontSize: "1.75rem" }}>
						Find and download the best high-quality photos
					</Typography>
					<Button variant="contained" to="/search" endIcon={<SearchIcon />} component={Link}>
						Search
					</Button>
				</Box>

				<Image bg={background} />
			</Container>
		</>
	);
};
