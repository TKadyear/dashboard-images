import { IconButton, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export const FilterBar = (props) => {
  const menuOptions = () => {
    const allOptions = Object.keys(props.optionsFilter).map(option =>
      <MenuItem key={option} value={props.optionsFilter[option]}>{option}</MenuItem>
    );
    return allOptions;
  };
  return (
    <div>
      {props.children}
      {props.sortOptions.isAscending
        ? <IconButton aria-label="ascending" onClick={props.onClick}><ArrowUpwardIcon /> </IconButton>
        : <IconButton aria-label="descending" onClick={props.onClick}><ArrowDownwardIcon /> </IconButton>
      }
      <FormControl>

        <InputLabel id="sort-options">Sort Options:</InputLabel>
        <Select autoWidth={true} labelId="sort-options" label="Sort" value={props.sortOptions.optionActive} name="Order" onChange={(e) => props.onChange(e.target.value)}>
          {menuOptions()}
        </Select>
      </FormControl>
      <hr />
    </div >
  );
};
