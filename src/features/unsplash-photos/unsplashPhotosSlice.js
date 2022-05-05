import { createSlice } from "@reduxjs/toolkit";


export const unsplashPhotosSlice = createSlice({
  name: "unsplash-photos",
  initialState: [],
  reducers: {
    addListPhoto: (state, action) => {//? Aunque no necesite el state si lo borro, no funciona nada.
      const newState = [...action.payload];
      return newState;
    }
  }
});

export const findPhoto = (id) => (state) => {
  return state.unsplashPhotos.allPhotos.find(img => img.id === id);
};
export const unsplashPhotos = (state) => {
  const option = state.sort.optionActive;
  const sorted = [...state.unsplashPhotos].sort((a, b) =>
    state.sort.isAscending
      ? a[option] + b[option]
      : a[option] - b[option]
  );
  return sorted;
};

export const { addListPhoto } = unsplashPhotosSlice.actions;

export default unsplashPhotosSlice.reducer;
