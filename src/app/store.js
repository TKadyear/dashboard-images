import { configureStore } from "@reduxjs/toolkit";
import myPhotosReducer from "../features/my-photos/myPhotosSlice";

export default configureStore({
  reducer: {
    myPhotos: myPhotosReducer
  }
});
