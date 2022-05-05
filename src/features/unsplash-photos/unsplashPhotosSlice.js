import { createSlice } from "@reduxjs/toolkit";

const optionsForSort = {
  "Width": "width",
  "Height": "height",
  "Likes": "likes",
};

export const unsplashPhotosSlice = createSlice({
  name: "unsplash-photos",
  initialState: {
    allPhotos: [],
    sort: {
      optionActive: "width",
      allOptionsAvailable: optionsForSort,
      isAscending: false
    }
  },
  reducers: {
    addListPhoto: (state, action) => {
      const isAlreadyAdded = [...state.allPhotos].every(element => element.id != action.payload.id);
      if (isAlreadyAdded) {
        const newState = [...state.allPhotos].concat(action.payload);
        return { ...state, allPhotos: newState };
      }
      return state;
    },
    changeFlowOfSort: (state) => {
      return { ...state, sort: { ...state.sort, isAscending: !state.sort.isAscending } };
    },
    changeOptionForSort: (state, action) => {
      return { ...state, sort: { ...state.sort, optionActive: action.payload } };
    },
  }
});

export const findPhoto = (id) => (state) => {
  return state.unsplashPhotos.allPhotos.find(img => img.id === id);
};
export const sortActive = (state) => state.unsplashPhotos.sort;
export const sortOptions = (state) => state.unsplashPhotos.sort.allOptionsAvailable;
export const sortAllMyPhotos = (state) => {
  const option = state.unsplashPhotos.sort.optionActive;
  const sorted = [...state.unsplashPhotos.allPhotos].sort((a, b) =>
    state.unsplashPhotos.sort.isAscending
      ? a[option] + b[option]
      : a[option] - b[option]
  );
  return sorted;
};

export const { addListPhoto, changeFlowOfSort, changeOptionForSort } = unsplashPhotosSlice.actions;

export default unsplashPhotosSlice.reducer;
