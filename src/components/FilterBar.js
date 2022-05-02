import { IconButton, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";
const Filter = styled.div`/*css */
  padding: 2rem;
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 0.5rem ;
`;
export const FilterBar = (props) => {
  const menuOptions = () => {
    const allOptions = Object.keys(props.optionsFilter).map(option =>
      <MenuItem key={option} value={props.optionsFilter[option]}>{option}</MenuItem>
    );
    return allOptions;
  };
  return (
    <Filter>
      {props.children}
      {props.sortOptions.isAscending
        ? <IconButton aria-label="ascending" onClick={props.onClick}><ArrowUpwardIcon /> </IconButton>
        : <IconButton aria-label="descending" onClick={props.onClick}><ArrowDownwardIcon /> </IconButton>
      }
      <FormControl>

        <InputLabel id="sort-options">Sort Options:</InputLabel>
        <Select sx={{ width: "150px" }} labelId="sort-options" label="Sort" value={props.sortOptions.optionActive} name="Order" onChange={(e) => props.onChange(e.target.value)}>
          {menuOptions()}
        </Select>
      </FormControl>
    </Filter >
  );
};
