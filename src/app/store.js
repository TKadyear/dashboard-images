import { configureStore } from "@reduxjs/toolkit";
import myPhotosReducer from "../features/my-photos/myPhotosSlice";
import unsplashPhotosReducer from "../features/unsplash-photos/unsplashPhotosSlice";

export default configureStore({
  reducer: {
    myPhotos: myPhotosReducer,
    unsplashPhotos: unsplashPhotosReducer
  }
});
