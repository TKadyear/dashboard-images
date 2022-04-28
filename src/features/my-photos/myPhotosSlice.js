import { createSlice } from "@reduxjs/toolkit";

const optionsForSort = {
  "Date Imported": "date_import_timestamp",
  "Width": "width",
  "Height": "height",
  "Likes": "likes",
};

// LocalStorage getItem y setItem son funciones sincrónas por lo que por eso se puede declarar de esa manera en la línea 5.
export const myPhotosSlice = createSlice({
  name: "my-photos",
  initialState: {
    allPhotos: JSON.parse(localStorage.getItem("imported_photos")) || [],
    sort: {
      optionActive: "Likes",
      allOptionsAvailable: optionsForSort,
      isAscending: false
    }
  },
  reducers: {
    addPhoto: (state, action) => {
      const newState = [...state.allPhotos].concat(action.payload);
      localStorage.setItem("imported_photos", JSON.stringify(newState));
      return { ...state, allPhotos: newState };
    },
    removePhoto: (state, action) => {
      const newList = [...state.allPhotos].filter(image => image.id != action.payload.id);
      localStorage.setItem("imported_photos", JSON.stringify(newList));
      return { ...state, allPhotos: newList };
    },
    editDescription: (state, action) => {
      const newState = [...state.allPhotos].map(image => {
        if (image.id === action.payload.id) {
          image.description = action.payload.description;
        }
        return image;
      });
      return { ...state, allPhotos: newState };
    },
    changeFlowOfSort: (state) => {
      return { ...state, sort: { ...state.sort, isAscending: !state.sort.isAscending } };
    },
    changeOptionForSort: (state, action) => {
      return { ...state, sort: { ...state.sort, optionActive: action.payload } };
    }
  }
});


export const sortActive = (state) => state.myPhotos.sort;
export const sortOptions = (state) => Object.keys(state.myPhotos.sort.allOptionsAvailable);
export const selectAllMyPhotos = (state) => state.myPhotos.allPhotos;

export const sortAllMyPhotos = (state) => {
  const option = optionsForSort[state.myPhotos.sort.optionActive];
  const sorted = [...state.myPhotos.allPhotos].sort((a, b) => {
    return state.myPhotos.sort.isAscending ? a[option] + b[option] : a[option] - b[option];
  });
  return sorted;
};

export const { addPhoto, removePhoto, editDescription, changeFlowOfSort, changeOptionForSort } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
