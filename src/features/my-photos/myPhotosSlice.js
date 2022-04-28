import { createSlice } from "@reduxjs/toolkit";

const optionsForSort = {
  "Date Imported": "date_import",
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
      console.log(state, action);
      const newState = [...state].concat(action.payload);
      if (state.length > 0) {
        localStorage.setItem("imported_photos", JSON.stringify(newState));
      }
      return newState;
    },
    removePhoto: (state, action) => {
      return [...state].filter(image => image.id != action.payload.id);
    },
    editDescription: (state, action) => {
      return [...state].map(image => {
        if (image.id === action.payload.id) {
          image.description = action.payload.description;
        }
        return image;
      });
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
// BUG si quito el spread operator deja de funcionar por error de boundaries, supongo debido a que cambia el inicial.
// BUG Tampoco es que funcione el sort
export const sortAllMyPhotos = (state) => {
  const option = state.myPhotos.sort.optionActive;
  return state.myPhotos.sort.isAscending
    ? [...state.myPhotos.allPhotos].sort((a, b) => {
      return a[option] + b[option];
    })
    : [...state.myPhotos.allPhotos].sort((a, b) => {
      return a[option] - b[option];
    });
};

export const { addPhoto, removePhoto, editDescription, changeFlowOfSort, changeOptionForSort } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
