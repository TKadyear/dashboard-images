import { Box, IconButton, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { sortActive, sortOptions, changeFlowOfSort, changeOptionForSort } from "../features/sort/sortSlice";


const Filter = styled.div`/*css */
  padding: 2rem;
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 0.5rem ;
`;
export const FilterBar = (props) => {
  const dispatch = useDispatch();
  const allSortOptions = useSelector(sortOptions);
  const sort = useSelector(sortActive);

  const handleClickAscending = () => dispatch(changeFlowOfSort());
  const handleChangeSort = (value) => dispatch(changeOptionForSort(value));
  const menuOptions = () => {
    if (allSortOptions) {
      const allOptions = Object.keys(allSortOptions).map(option =>
        <MenuItem key={option} value={allSortOptions[option]}>{option}</MenuItem>
      );
      return allOptions;
    }
  };
  return (
    <Filter>
      {props.children}
      <Box>
        {sort.isAscending
          ? <IconButton aria-label="ascending" onClick={handleClickAscending}><ArrowUpwardIcon /> </IconButton>
          : <IconButton aria-label="descending" onClick={handleClickAscending}><ArrowDownwardIcon /> </IconButton>
        }
        <FormControl>

          <InputLabel id="sort-options">Sort</InputLabel>
          <Select sx={{ width: "150px" }} labelId="sort-options" label="Sort" value={sort.optionActive} name="Order" onChange={(e) => handleChangeSort(e.target.value)}>
            {menuOptions()}
          </Select>
        </FormControl>
      </Box>
    </Filter >
  );
};
