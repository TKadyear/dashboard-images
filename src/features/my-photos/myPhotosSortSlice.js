import { createSlice } from "@reduxjs/toolkit";

const optionsForSort = {
  "Date Imported": "date_import",
  "Width": "width",
  "Height": "height",
  "Likes": "likes",
};

export const myPhotosSortSlice = createSlice({
  name: "my-photos-sort",
  initialState: {
    optionActive: optionsForSort["Likes"],
    allOptionsAvailable: optionsForSort,
    isAscending: false
  },
  reducers: {
    changeFlowOfSort: (state) => {
      return { ...state, isAscending: !state.isAscending };
    },
    changeOptionForSort: (state, action) => {
      return { ...state, optionActive: action.payload };
    },
  }
});
export const { changeFlowOfSort, changeOptionForSort } = myPhotosSortSlice.actions;

export const sortActive = (state) => state.myPhotosSortSlice;
export const sortOptions = (state) => Object.keys(state.myPhotosSort.allOptionsAvailable);
export default myPhotosSortSlice.reducer;
