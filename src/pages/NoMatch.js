import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`/*css*/
  position: relative;
  display: flex;
	flex-direction: column;
  align-items: center;
	padding: 2rem;
`;
const LinksRow = styled.div`/*css*/
	display: flex;
  width: inherit;
	flex-flow: row wrap;
  gap: 2rem;
	padding: 1rem 0;
`;
export const NoMatch = () => {

  return (
    <Container>
      <Box sx={{ width: { xs: "90%", sm: "75%" }, maxWidth: 550, position: "relative" }}>
        <Typography sx={{ color: "#b0c4de", fontSize: "10rem", position: "absolute", left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} variant="p">404</Typography>
        <Typography variant="h1" sx={{}}>Oops!</Typography>
        <Typography sx={{ fontSize: "1.5rem", textTransform: "uppercase" }} variant="h2" >The link is broken or the page has been moved. Try these pages instead:</Typography>
      </Box>
      <LinksRow>
        <Button to="/dashboard-images" component={Link}>Home</Button>
        <Button to="/dashboard-images/search" component={Link}>Search</Button>
        <Button to="/dashboard-images/gallery" component={Link}>My Photos</Button>
      </LinksRow>
    </Container>
  );
};

export const NoImages = (props) => {
  return (
    <Container>
      <Typography sx={{ fontSize: "1.5rem" }} variant="h2" >{props.text}</Typography>
      {props.to && <Button to={props.to} component={Link}>{props.value}</Button>}
    </Container>
  );
};
