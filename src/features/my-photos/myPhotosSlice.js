import { createSlice, action } from "@reduxjs/toolkit";

export const myPhotosSlice = createSlice({
  name: "my-photos",
  initialState: localStorage.getItem("imported_photos") || [],
  reducers: {
    addPhoto: state => {
      [...state, action.payload];
    },
    removePhoto: state => {
      [...state].filter(image => image.id === action.payload);
    },
    editDescription: (state, action) => {
      [...state].map(image => {
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
