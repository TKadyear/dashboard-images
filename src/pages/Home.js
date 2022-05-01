import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
const Container = styled.div`/*css*/
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 2rem;

`;

export const Home = () => {
	return (
		<>
			<Container>
				<Box sx={{ width: "45%" }}>
					<Typography variant="h1">Encuentra <strong style={{ color: "#4949a3" }}>todas las imágenes</strong> que quieras</Typography>
					<Typography variant="h2" >Todas las imágenes de uso libre</Typography>
				</Box>
				<Box sx={{ width: "45%" }}>
					<Typography variant="h1">Encuentra <strong style={{ color: "#4949a3" }}>todas las imágenes</strong> que quieras</Typography>
					<Typography variant="h2" >Todas las imágenes de uso libre</Typography>
				</Box>
			</Container>
		</>
	);
};
