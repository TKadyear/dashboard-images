import { createSlice } from "@reduxjs/toolkit";

// LocalStorage getItem y setItem son funciones sincrónas por lo que por eso se puede declarar de esa manera en la línea 5.
export const myPhotosSlice = createSlice({
  name: "my-photos",
  initialState: JSON.parse(localStorage.getItem("imported_photos")) || [],
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
          // Si no lo hago así se muta la ref del objeto por lo que se entiende como una mutación, asi que sale un error de "Immer"
          return { ...image, description: action.payload.description };
        }
        return image;
      });
      localStorage.setItem("imported_photos", JSON.stringify(newState));
      return newState;
    },
  }
});

// Parece ser que no se pueden pasar datos externos a un selector, por lo que esta función hace Currying,
// basicamente es una función que devuelve otra para que se ejecute pero comparten el scope.
export const findPhoto = (id) => (state) => {
  return state.myPhotos.find(img => img.id === id);
};
export const sortAllMyPhotos = (searchTerm) => (state) => {
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
