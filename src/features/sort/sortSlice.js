import { createSlice } from "@reduxjs/toolkit";
export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    allOptionsAvailable: {
      "Width": "width",
      "Height": "height",
      "Likes": "likes"
    },
    optionActive: "width",
    isAscending: false
  },
  reducers: {
    addMoreOptions: (state, action) => { //Este reducer realmente inicializa y cambia las opciones pero hayq ue pensar como nombrarlo mejor
      return { ...state, allOptionsAvailable: { ...state.allOptionsAvailable, [action.payload.key]: action.payload.value } };
    },

    changeFlowOfSort: (state) => {
      return { ...state, isAscending: !state.isAscending };
    },
    changeOptionForSort: (state, action) => {
      return { ...state, optionActive: action.payload };
    },
  }
});
export const { addMoreOptions, changeFlowOfSort, changeOptionForSort } = sortSlice.actions;

export const sortActive = (state) => state.sort;
export const sortOptions = (state) => state.sort.allOptionsAvailable;
export default sortSlice.reducer;
