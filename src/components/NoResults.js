import { Typography } from "@mui/material";
export const NoResults = (props) => {
  return (<>
    <Typography variant="h4" sx={{ textAlign: "center" }} >{props.textContent}</Typography>
    <Typography variant="h6" sx={{ textAlign: "center" }} >{props.subtitle}</Typography>
  </>
  );
};
