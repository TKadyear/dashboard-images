import TextField from "@mui/material/TextField";

const style = (theme) => ({
  width: 250,
  maxWidth: 900,
  marginBottom: "1rem",
  [theme.breakpoints.up("sm")]: {
    width: "65%"
  },
  [theme.breakpoints.up("md")]: {
    width: "75%"
  }
});
export const InputSearch = (props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      value={props.searchTerm}
      onChange={props.onChange}
      sx={style}
    />
  );
};
