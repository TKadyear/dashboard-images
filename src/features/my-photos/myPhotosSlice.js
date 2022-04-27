import { createSlice } from "@reduxjs/toolkit";

export const myPhotosSlice = createSlice({
  name: "my-photos",
  initialState: localStorage.getItem("imported_photos") || [],
  reducers: {
    addPhoto: (state, action) => {
      const newState = [...state, action.payload];
      if (state.length > 0) {
        localStorage.setItem("imported_photos", JSON.stringify(newState));
      }
      return newState;
    },
    removePhoto: (state, action) => {
      return [...state].filter(image => image.id === action.payload);
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

export const { addPhoto, removePhoto, editDescription } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
