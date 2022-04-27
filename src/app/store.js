import { configureStore } from "@reduxjs/toolkit";
import myPhotosReducer from "../features/counter/counterSlice";
export default configureStore({
  reducer: {
    myPhotos: myPhotosReducer
  }
});
