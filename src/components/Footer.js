import { BottomNavigation, Typography } from "@mui/material";
export const FooterBar = () => {
  return (
    <BottomNavigation sx={{ flexDirection: "column", padding: "1rem", alignItems: "center", boxShadow: "0px -2px 4px -1px rgb(0 0 0 / 20%), 0px -4px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%)" }}>
      <Typography>DASHBOARD IMAGES©All Rights Reserved</Typography>
      <Typography>Website developed by <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tamara-kadyear-saber/">Tamara Kadyear</a>
      </Typography>
    </BottomNavigation >
  );
};
