import { createSlice } from "@reduxjs/toolkit";

export const myPhotosSlice = createSlice({
  name: "my-photos",
  initialState: JSON.parse(localStorage.getItem("imported_photos")) || [], //LocalStorage.getItem() is a  synchronous function
  reducers: {
    addPhoto: (state, action) => {
      const isAlreadyAdded = [...state].every(element => element.id != action.payload.id);
      if (isAlreadyAdded) {
        const date = new Date();
        const newPhoto = { ...action.payload, date_import: date.toISOString(), date_import_timestamp: date.getTime() };
        const newState = [...state].concat(newPhoto);
        localStorage.setItem("imported_photos", JSON.stringify(newState));
        return newState;
      }
      return state;
    },
    removePhoto: (state, action) => {
      const newList = [...state].filter(image => image.id != action.payload);
      localStorage.setItem("imported_photos", JSON.stringify(newList));
      return newList;
    },
    editDescription: (state, action) => {
      const newState = [...state].map(image => {
        if (image.id === action.payload.id) {
          return { ...image, description: action.payload.description };
        }
        return image;
      });
      localStorage.setItem("imported_photos", JSON.stringify(newState));
      return newState;
    },
  }
});


export const findPhoto = (id) => (state) => {//Currying Functions
  return state.myPhotos.find(img => img.id === id);
};
export const sortAllMyPhotos = (searchTerm) => (state) => {//Currying Functions
  const option = state.sort.optionActive;
  const listFiltered = searchTerm.length === 0
    ? [...state.myPhotos]
    : [...state.myPhotos].filter(image => image.description && image.description.includes(searchTerm));
  const sorted = listFiltered.sort((a, b) => {
    return state.sort.isAscending ? a[option] + b[option] : a[option] - b[option];
  });
  return sorted;
};

export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
