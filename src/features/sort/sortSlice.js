import { createSlice } from "@reduxjs/toolkit";
// IMPROVE in the componentMount como tal hay que hacer un dispatch de las opciones para el state

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    allOptionsAvailable: {},
    optionActive: "",
    isAscending: false
  },
  reducers: {
    initializeOptions: (state, action) => { //Este reducer realmente inicializa y cambia las opciones pero hayq ue pensar como nombrarlo mejor
      return { ...state, allOptionsAvailable: action.payload.options, optionActive: action.payload.optionActive };
    },
    changeFlowOfSort: (state) => {
      return { ...state, isAscending: !state.isAscending };
    },
    changeOptionForSort: (state, action) => {
      return { ...state, optionActive: action.payload };
    },
  }
});
export const { initializeOptions, changeFlowOfSort, changeOptionForSort } = sortSlice.actions;

export const sortActive = (state) => state.sort;
export const sortOptions = (state) => state.sort.allOptionsAvailable;
export default sortSlice.reducer;
