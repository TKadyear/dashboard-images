import { Typography, Link } from "@mui/material";
import styled from "@emotion/styled";

const BottomNavigation = styled.footer`/*css*/
  display:flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%), 0px -4px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%);
`;
export const FooterBar = () => {
  return (
    <BottomNavigation>
      <Typography><Link rel="noopener noreferrer" target="_blank" href="https://github.com/TKadyear/dashboard-images">DASHBOARD IMAGES</Link>©All Rights Reserved</Typography>
      <Typography variant="p">Website developed by <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tamara-kadyear-saber/">
        Tamara Kadyear
      </Link>
      </Typography>
    </BottomNavigation >
  );
};
