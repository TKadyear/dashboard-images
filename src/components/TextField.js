import TextField from "@mui/material/TextField";

export const InputSearch = (props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      value={props.searchTerm}
      onChange={props.onChange}
      sx={{
        maxWidth: 900,
        width: "90%"
      }}
    />
  );
};
