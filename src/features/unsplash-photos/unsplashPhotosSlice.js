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
    addPhoto: (state, action) => {
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
export const sortAllMyPhotos = (searchTerm) => (state) => {
  const option = state.unsplashPhotos.sort.optionActive;
  console.log(option);
  const listFiltered = searchTerm.length === 0
    ? [...state.unsplashPhotos.allPhotos]
    : [...state.unsplashPhotos.allPhotos].filter(image => image.description && image.description.includes(searchTerm));
  const sorted = listFiltered.sort((a, b) => {
    return state.unsplashPhotos.sort.isAscending ? a[option] + b[option] : a[option] - b[option];
  });
  return sorted;
};

export const { addPhoto, removePhoto, editDescription, changeFlowOfSort, changeOptionForSort } = unsplashPhotosSlice.actions;

export default unsplashPhotosSlice.reducer;
