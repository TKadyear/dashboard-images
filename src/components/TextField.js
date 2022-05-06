import TextField from "@mui/material/TextField";

const style = (theme) => ({
  width: "75%",
  minWidth: 300,
  maxWidth: 350,
  marginBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    maxWidth: 650,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 900
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
