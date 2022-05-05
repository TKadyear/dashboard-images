import { createSlice } from "@reduxjs/toolkit";
const initialOptionsAvailable = {
  "Width": "width",
  "Height": "height",
  "Likes": "likes"
};
export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    allOptionsAvailable: initialOptionsAvailable,
    optionActive: "width",
    isAscending: false
  },
  reducers: {
    addMoreOptions: (state, action) => { //Este reducer realmente inicializa y cambia las opciones pero hayq ue pensar como nombrarlo mejor
      return { ...state, allOptionsAvailable: { ...state.allOptionsAvailable, [action.payload.key]: action.payload.value } };
    },
    resetOptions: (state) => {
      return { ...state, allOptionsAvailable: { ...initialOptionsAvailable } };
    },
    changeFlowOfSort: (state) => {
      return { ...state, isAscending: !state.isAscending };
    },
    changeOptionForSort: (state, action) => {
      return { ...state, optionActive: action.payload };
    },
  }
});
export const { addMoreOptions, resetOptions, changeFlowOfSort, changeOptionForSort } = sortSlice.actions;

export const sortActive = (state) => state.sort;
export const sortOptions = (state) => state.sort.allOptionsAvailable;
export default sortSlice.reducer;
