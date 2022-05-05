import { configureStore } from "@reduxjs/toolkit";
import myPhotosReducer from "../features/my-photos/myPhotosSlice";
import unsplashPhotosReducer from "../features/unsplash-photos/unsplashPhotosSlice";
import sortReducer from "../features/sort/sortSlice";

export default configureStore({
  reducer: {
    myPhotos: myPhotosReducer,
    unsplashPhotos: unsplashPhotosReducer,
    sort: sortReducer
  }
});
