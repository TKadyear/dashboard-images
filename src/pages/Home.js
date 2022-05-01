import { Typography, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styled from "@emotion/styled";
import { useState } from "react";
import { InputSearch } from "../components/TextField";
import { Link } from "react-router-dom";

const Container = styled.div`/*css*/
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 2rem;
	padding: 2rem;
`;
const FormSearch = styled.div`/*css*/
	display: flex;
	width: 50%;
	flex-direction: row;
	gap: 1rem;
`;

export const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (e) => setSearchTerm(e.target.value);
	return (
		<>
			<Container>
				<Box sx={{ width: "65%" }}>
					<Typography variant="h1">Encuentra <strong style={{ color: "#4949a3" }}>todas las imágenes</strong> que quieras</Typography>
					<Typography variant="h2" >Todas las imágenes de uso libre</Typography>
				</Box>
				<FormSearch>

					<InputSearch
						id="search"
						label="Search"
						value={searchTerm}
						onChange={handleChange}
					>
					</InputSearch>
					<Button variant="contained" to={searchTerm ? `/search/?query=${searchTerm}` : "/search"} endIcon={<SendIcon />} component={Link}>
						Send
					</Button>
				</FormSearch>

			</Container>
		</>
	);
};
