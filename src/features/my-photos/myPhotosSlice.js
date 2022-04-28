import { createSlice } from "@reduxjs/toolkit";
// LocalStorage getItem y setItem son funciones sincrónas por lo que por eso se puede declarar de esa manera en la línea 5.
export const myPhotosSlice = createSlice({
  name: "my-photos",
  initialState: JSON.parse(localStorage.getItem("imported_photos")) || [],
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
    }
  }
});

export const selectAllMyPhotos = (state) => state.myPhotos;
// export const orderAllMyPhotos = (state) => state;

export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
